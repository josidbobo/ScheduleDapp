# How to start a Hardhat Project
1. Create Project Folder
2. npm init
3. npx install --save-dev hardhat
4. npx hardhat
5. Create an empty config file from the command prompt
6. npm install --save-dev @nomiclabs/hardhat-ethers ethers
7. Populate the config file and create a deploy.js file
8. Create contract folder and files
9. npx hardhat node --> For accounts on hardhat node
10. cd to the contract folder and run (npx hardhat compile) --> compile the files
11. (cd -) out of the contract folder 
12. npx hardhat run --network localhost scripts/deploy.js --> Replace localhost with network to deploy to

# How to start the frontEnd
1. npx create-react-app my-app --> replace my-app with name of your app
2. npm install ethers bootstrap @metamask/detect-provider

