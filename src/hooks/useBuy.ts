import { utils } from 'ethers';
import { useContractWrite } from 'wagmi';
import { Token } from '../modules/wagmi';
import { ABI } from '../modules/abi';

const INVESTLY_LOGIC_ADDRESS = '0x269C36463d6284775A9B944A4Fa3cF02a08f6dE5';

export const useBuy = (selectedChainId: any) => {
  let buy: (amount: bigint, token: Token) => void;

  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: INVESTLY_LOGIC_ADDRESS,
    abi: ABI,
    functionName: 'depositToken',
    onSuccess: () => {
      console.log('success');
    },
  });

  buy = (amount, token) => write({ args: [token, amount] });

  return { data, isLoading, isSuccess, buy };
};
