import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming, interpolate } from 'react-native-reanimated';

const countries = [
  { code: 'PS', name: 'Palestine', flag: '🇵🇸', dial: '970' },
  { code: 'US', name: 'United States', flag: '🇺🇸', dial: '1' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦', dial: '1' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧', dial: '44' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪', dial: '49' },
  { code: 'FR', name: 'France', flag: '🇫🇷', dial: '33' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵', dial: '81' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺', dial: '61' },
  { code: 'IN', name: 'India', flag: '🇮🇳', dial: '91' },
];

export default function InputComponent({ type = "phone" }: { type: "phone" | "code" }) {
  const [selectedCountry, setSelectedCountry] = useState(countries[8]); // Default to India (91)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [inputDigits, setInputDigits] = useState(
    type === "phone" ? Array(10).fill('') : Array(6).fill('')
  );
  const [isFocused, setIsFocused] = useState(false);
  const [activeDigitIndex, setActiveDigitIndex] = useState(0);
  const inputRef = useRef<TextInput | null>(null);
  
  const dropdownAnimation = useSharedValue(0);

  const toggleDropdown = () => {
    const newValue = !isDropdownOpen;
    setIsDropdownOpen(newValue);
    dropdownAnimation.value = withTiming(newValue ? 1 : 0, { duration: 300 });
  };

  const selectCountry = (country: typeof countries[0]) => {
    setSelectedCountry(country);
    toggleDropdown();
    inputRef.current?.focus();
  };

  const handleInputChange = (text: string) => {
    // Remove non-numeric characters
    const cleaned = text.replace(/\D/g, '');
    
    // Determine max length based on type
    const maxLength = type === "phone" ? 10 : 6;
    
    // Convert to array of single digits
    const digits = cleaned.split('').slice(0, maxLength);
    
    // Fill the array with the new digits, leaving the rest empty
    const newDigits = Array(maxLength).fill('');
    digits.forEach((digit, index) => {
      newDigits[index] = digit;
    });
    
    setInputDigits(newDigits);
    setActiveDigitIndex(cleaned.length < maxLength ? cleaned.length : maxLength - 1);
  };

  // Focus input when component renders or when user taps on any part of the input area
  const focusInput = () => {
    inputRef.current?.focus();
    setIsFocused(true);
  };
  
  const handleBlur = () => {
    setIsFocused(false);
  };

  const dropdownAnimatedStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(dropdownAnimation.value, [0, 1], [0, 200]),
      opacity: dropdownAnimation.value,
    };
  });

  // Render a single digit placeholder
  const renderDigitWithPointer = (value: string, index: number, colorClass: string) => {
    const isActive = isFocused && activeDigitIndex === index;
    
    return (
      <View key={index} className="relative">
        <Text className={`text-2xl px-1 ${colorClass}`}>
          {value || <Text className='text-2xl scale-x-150'>_</Text>}
        </Text>
        {isActive && (
          <View className="h-1 w-1 bg-blue-500 rounded-full absolute -bottom-1 left-1/2 transform -translate-x-1/2" />
        )}
      </View>
    );
  };

  // Render digit groups based on type
  const renderDigits = () => {
    if (type === "phone") {
      return (
        <>
          {/* First section: 2 digits */}
          <View className="flex flex-row mr-4">
            {renderDigitWithPointer(
              inputDigits[0], 
              0, 
              inputDigits[0] ? 'text-black' : 'text-gray-400'
            )}
            {renderDigitWithPointer(
              inputDigits[1], 
              1, 
              inputDigits[1] ? 'text-black' : 'text-gray-400'
            )}
            {renderDigitWithPointer(
              inputDigits[2], 
              2, 
              inputDigits[2] ? 'text-black' : 'text-gray-400'
            )}
          </View>
          
          {/* Second section: 3 digits */}
          <View className="flex flex-row mr-4">
            {renderDigitWithPointer(
              inputDigits[3], 
              3, 
              inputDigits[3] ? '' : 'text-gray-400'
            )}
            {renderDigitWithPointer(
              inputDigits[4], 
              4, 
              inputDigits[4] ? 'text-black' : 'text-gray-400'
            )}
            {renderDigitWithPointer(
              inputDigits[5], 
              5, 
              inputDigits[5] ? 'text-black' : 'text-gray-400'
            )}
          </View>
          
          {/* Fourth section: 3 digits (fixing to show all 10 digits) */}
          <View className="flex flex-row">
            {renderDigitWithPointer(
              inputDigits[6], 
              6, 
              inputDigits[6] ? 'text-black' : 'text-gray-400'
            )}
            {renderDigitWithPointer(
              inputDigits[7], 
              7, 
              inputDigits[7] ? 'text-black' : 'text-gray-400'
            )}
            {renderDigitWithPointer(
              inputDigits[8], 
              8, 
              inputDigits[8] ? 'text-black' : 'text-gray-400'
            )}
            {renderDigitWithPointer(
              inputDigits[9], 
              9, 
              inputDigits[9] ? 'text-black' : 'text-gray-400'
            )}
          </View>
        </>
      );
    } else {
      // Code input - 6 digits
      return (
        <View className="flex flex-row justify-center">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            renderDigitWithPointer(
              inputDigits[index],
              index,
              inputDigits[index] 
                ? index === 2 ? '' : 'text-black' 
                : 'text-gray-400'
            )
          ))}
        </View>
      );
    }
  };

  return (
    <View className="flex items-center justify-center w-full">
      <View className="relative w-full">
        <View className="flex flex-row items-center bg-white border border-blue-300 rounded-xl p-4 h-20 w-full">
          {/* Country Flag and Code Section - only show for phone type */}
          {type === "phone" && (
            <TouchableOpacity 
              onPress={toggleDropdown}
              className="flex flex-row items-center mr-2 w-20"
            >
              <View className="h-10 w-10 overflow-hidden mr-1">
                <Text className="text-3xl">{selectedCountry.flag}</Text>
              </View>
              <Text className="text-2xl font-semibold">{selectedCountry.dial}</Text>
            </TouchableOpacity>
          )}
          
          {/* Input Area with Digit Placeholders */}
          <Pressable 
            onPress={focusInput} 
            className={`flex-1 flex-row items-center ${type === "code" ? "justify-center" : ""}`}
          >
            <TextInput
              ref={inputRef}
              className="absolute w-full h-full opacity-0"
              keyboardType="number-pad"
              value={inputDigits.join('')}
              onChangeText={handleInputChange}
              onFocus={() => setIsFocused(true)}
              onBlur={handleBlur}
              maxLength={type === "phone" ? 10 : 6}
            />
            
            {renderDigits()}
          </Pressable>
        </View>

        {/* Country Dropdown - only for phone type */}
        {type === "phone" && isDropdownOpen && (
          <Animated.View 
            style={dropdownAnimatedStyle} 
            className="absolute top-14 left-0 w-full border border-gray-300 rounded-xl bg-white z-10 overflow-hidden"
          >
            <ScrollView className="flex-1">
              {countries.map((country) => (
                <Pressable 
                  key={country.code}
                  onPress={() => selectCountry(country)}
                  className={`flex flex-row items-center p-3 border-b border-gray-100 ${selectedCountry.code === country.code ? 'bg-blue-50' : ''}`}
                >
                  <Text className="text-xl mr-3">{country.flag}</Text>
                  <View className="flex-1">
                    <Text className="font-medium">{country.name}</Text>
                    <Text className="text-gray-500">+{country.dial}</Text>
                  </View>
                </Pressable>
              ))}
            </ScrollView>
          </Animated.View>
        )}
      </View>
    </View>
  );
}