import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useValues} from '../../../../App';
import colors from '../../../theme/colors';

export const TabContent = ({state, descriptors, navigation}) => {
  const {viewRTLStyle, isDark} = useValues();

  return (
    <View
      style={[
        styles.tabContainer,
        {backgroundColor: isDark ? colors.darkScreenBg : colors.screenBg},
      ]}>
      <View style={[styles.row, {flexDirection: viewRTLStyle}]}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const Icon = options.tabBarIcon;
          const ActiveIcon = options.activeTabBarIcon;
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          return (
            <View style={styles.tabView}>
              <TouchableOpacity
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles.tab}
                key={index}>
                <View>{isFocused ? <ActiveIcon /> : <Icon />}</View>
              </TouchableOpacity>
              {state.index === index && (
                <View
                  style={[
                    styles.line,
                    {
                      backgroundColor: isDark
                        ? colors.screenBg
                        : colors.primary,
                    },
                  ]}
                />
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
};
