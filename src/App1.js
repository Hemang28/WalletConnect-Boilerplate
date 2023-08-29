// WalletConnect with Rainbow kit


import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { ConnectButton } from '@rainbow-me/rainbowkit';


const { chains, publicClient } = configureChains(
    [mainnet, polygon, optimism, arbitrum, base, zora],
    [
      alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
      publicProvider()
    ]
  );
  
  const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    projectId: 'b95028c13ca98a427d648e057629da40',
    chains
  });
  
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
  })


  const App = () => {
    return (
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          <YourApp />
        </RainbowKitProvider>
      </WagmiConfig>
    );
  };

  
export const YourApp = () => {
  return <ConnectButton />;
};

export default App;