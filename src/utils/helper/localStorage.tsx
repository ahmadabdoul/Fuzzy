import AsyncStorage from "@react-native-async-storage/async-storage";

const setValue = async (key: string, value: string): Promise<void> => {
  await AsyncStorage.setItem(key, value);
};

const getValue = async (key: string): Promise<string | null> => {
  const val = await AsyncStorage.getItem(key);
  return val;
};

const deleteValue = async (key: string): Promise<void> => {
  await AsyncStorage.removeItem(key);
};

const deleteMultipleValue = async (keys: string[]): Promise<void> => {
  await AsyncStorage.multiRemove(keys);
};

const clearValue = async (): Promise<void> => {
  await AsyncStorage.clear();
};

export { setValue, getValue, deleteValue, clearValue, deleteMultipleValue };
