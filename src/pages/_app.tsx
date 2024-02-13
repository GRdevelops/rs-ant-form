import "@/styles/globals.css";
import { ConfigProvider } from 'antd';
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return  (
    <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: '#ef0000',
        borderRadius: 8,

        // Alias Token
        colorBgContainer: '#ffffff',
      },
    }}
    >
      <Component {...pageProps} />;
    </ConfigProvider>
  )
}
