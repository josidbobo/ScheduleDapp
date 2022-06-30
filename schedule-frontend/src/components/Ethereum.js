import detectEthereumProvider from '@metamask/detect-provider';
import { ethers, Contract } from 'ethers';
import Schedule from '../artifacts/contracts/Schedule.sol/Schedule.json';

const getBlockchain = () =>
  new Promise( async (resolve, reject) => {
    let provider = await detectEthereumProvider();
    if(provider) {
      await provider.request({ method: 'eth_requestAccounts' });
      //const networkId = await provider.request({ method: 'net_version' })
      provider = new ethers.providers.Web3Provider(provider);
      const signer = provider.getSigner();
      const schedule = new Contract(
        '0x57B25FAB2CE53935812FBe022D5c30b445BA326B',
        Schedule.abi,
        signer
      );
      resolve({schedule});
      return;
    }
    reject('Install Metamask');
 });

export default getBlockchain;