import detectEthereumProvider from '@metamask/detect-provider';
import { ethers, Contract } from 'ethers';
import Schedule from '../artifacts/contracts/Schedule.sol/Schedule.json';

const getBlockchain = () =>
  new Promise( async (resolve, reject) => {
    let provider = await detectEthereumProvider();
    if(provider) {
      await provider.request({ method: 'eth_requestAccounts' });
      const networkId = await provider.request({ method: 'net_version' })
      provider = new ethers.providers.Web3Provider(provider);
      const signer = provider.getSigner();
      const schedule = new Contract(
        '0xc08894b48cF9d32EAda4F9315b4C3efAA8ec2Ec1',
        Schedule.abi,
        signer
      );
      resolve({schedule});
      return;
    }
    reject('Install Metamask');
 });

export default getBlockchain;