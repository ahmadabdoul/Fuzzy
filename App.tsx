import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { SafeAreaView, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { external } from "./src/styles/external.css";
import Navigator from "./src/navigator";
import { fetchFonts } from "./src/helper/commonfonts";
import {
  textRTLStyle,
  viewRTLStyle,
  imageRTLStyle,
  viewSelfRTLStyle,
} from "./src/styles/rtlStyle";
import i18n from "./src/assets/language";
import { I18nextProvider, useTranslation } from "react-i18next";
SplashScreen.preventAutoHideAsync();

interface CommonContextProps {
  currSymbol: string;
  setCurrSymbol: React.Dispatch<React.SetStateAction<string>>;
  currPrice: number;
  setCurrPrice: React.Dispatch<React.SetStateAction<number>>;
  isRTL: boolean;
  setIsRTL: React.Dispatch<React.SetStateAction<boolean>>;
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
  textRTLStyle: ReturnType<typeof textRTLStyle>;
  viewRTLStyle: ReturnType<typeof viewRTLStyle>;
  imageRTLStyle: ReturnType<typeof imageRTLStyle>;
  viewSelfRTLStyle: ReturnType<typeof viewSelfRTLStyle>;
  t: (key: string) => string;
}

export const CommonContext = createContext<CommonContextProps | undefined>(
  undefined
);

const App: React.FC = () => {
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);
  const [isRTL, setIsRTL] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);
  const [currSymbol, setCurrSymbol] = useState<string>("$");
  const [currPrice, setCurrPrice] = useState<number>(1);
  const { t } = useTranslation();

  const contextValues: CommonContextProps = {
    currSymbol,
    setCurrSymbol,
    currPrice,
    setCurrPrice,
    isRTL,
    setIsRTL,
    isDark,
    setIsDark,
    textRTLStyle: textRTLStyle(isRTL),
    viewRTLStyle: viewRTLStyle(isRTL),
    imageRTLStyle: imageRTLStyle(isRTL),
    viewSelfRTLStyle: viewSelfRTLStyle(isRTL),
    t,
  };

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await fetchFonts();
        setFontsLoaded(true);
      } catch (error) {
        console.log(error);
      } finally {
        SplashScreen.hideAsync();
      }
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <CommonContext.Provider value={contextValues}>
      <I18nextProvider i18n={i18n}>
        <SafeAreaView style={[external.fx_1]}>
          <Navigator />
        </SafeAreaView>
      </I18nextProvider>
    </CommonContext.Provider>
  );
};

export const useValues = (): CommonContextProps => {
  const context = useContext(CommonContext);
  if (!context) {
    throw new Error("useValues must be used within a CommonContext.Provider");
  }
  return context;
};

export default App;
