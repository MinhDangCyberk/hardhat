// import {
//   loadFixture,
//   time,
// } from "@nomicfoundation/hardhat-toolbox/network-helpers";
// import { expect } from "chai";
// import hre from "hardhat";

// describe("Escrow", function () {
//   // We define a fixture to reuse the same setup in every test.
//   // We use loadFixture to run this setup once, snapshot that state,
//   // and reset Hardhat Network to that snapshot in every test.
//   async function deployOneYearLockFixture() {
//     // Contracts are deployed using the first signer/account by default
//     const [owner, claimer] = await hre.ethers.getSigners();

//     const Escrow = await hre.ethers.getContractFactory("Escrow");
//     const escrow = await Escrow.deploy(claimer.address);

//     return { escrow, owner, claimer };
//   }

//   it("Should deposit", async function () {
//     const { escrow, claimer, owner } = await loadFixture(
//       deployOneYearLockFixture
//     );
//     await escrow.deposit({ value: 100 });
//     expect(await escrow.amount()).to.equal(100);

//     await expect(escrow.withdraw())
//       .revertedWithCustomError(escrow, "OnlyClaimerCanWithdraw")
//       .withArgs(owner.address);

//     await expect(escrow.connect(claimer).withdraw()).changeEtherBalances(
//       [claimer, escrow],
//       [100, -100]
//     );
//   });

//   it("Should withdraw once week", async function () {
//     const { escrow, claimer, owner } = await loadFixture(
//       deployOneYearLockFixture
//     );
//     const n = 4;
//     const depositAmount = 100;
//     const installmentAmount = depositAmount / n;

//     await escrow.deposit({ value: depositAmount });

//     await expect(escrow.withdraw())
//       .revertedWithCustomError(escrow, "OnlyClaimerCanWithdraw")
//       .withArgs(owner.address);
//     for (let i = 0; i < n; i++) {
//       await time.increase(7 * 24 * 60 * 60);
//       await expect(escrow.connect(claimer).withdraw()).to.changeEtherBalances(
//         [claimer, escrow],
//         [installmentAmount, -installmentAmount]
//       );
//     }
//   });
// });
