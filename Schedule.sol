// SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.9;

contract Schedule{

    struct Task{
        uint id;
        uint data;
        string content;
        string author;
        bool done;
        bool isCreated;
        uint dateComplete;
    }

    /// @dev mapping to map users task to their ID
    mapping(uint => Task) public tasks;
    uint nextTaskId;

    event TaskCreated( 
         uint id,
        uint data, 
        string content,
        string author,
        bool done
    );

    event TaskStatusToggled(
        uint id,
        bool done,
        uint date
    );

    /// @notice To create a task and return bool to indicate completion
    /// @param _content what is the task and _author who created the task
    function createTask(string memory _content, string memory _author) external returns (bool) {
            tasks[nextTaskId] = Task(nextTaskId, block.timestamp, _content, _author, false, true, 0);
            emit TaskCreated(nextTaskId, block.timestamp, _content, _author, false);
            nextTaskId++;
            return true;
        }

    /// @notice To get Tasks in an array
    /// @dev A temporary array is created in memory to return the tasks
    function getTask() external view returns(Task[] memory){
        Task [] memory _tasks = new Task[](nextTaskId);
        for(uint i = 0; i < nextTaskId; i++){
            _tasks[i] = tasks[i];
        }
        return _tasks;
    }

    /// @notice To change status of a task to done or undone
    /// @param id of the already existing task to be toggled 
    function toggleDone(uint id) external {
        require(tasks[id].isCreated, "Task does not exist");
        Task storage task = tasks[id];
        task.done = !task.done;
        task.dateComplete = task.done ? block.timestamp : 0;
        emit TaskStatusToggled(id, task.done, task.dateComplete);
    }

}