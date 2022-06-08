const { ethers } = require("hardhat");

async function main(){
    /// We get the contract to deploy
    const Schedule = await ethers.getContractFactory("Schedule");
    const schedule = await Schedule.deploy();

    await schedule.deployed();

    console.log("Schedule deployed to:", schedule.address);
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});