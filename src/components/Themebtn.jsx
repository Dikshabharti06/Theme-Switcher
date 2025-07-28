import React from 'react'
import useTheme from '../contexts/theme';

export default function ThemeBtn() {
    
    const {themeMode, lightMode, darkMode} = useTheme()
    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if (darkModeStatus) {
            darkMode()
        } else {
            lightMode()
        }
    }
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={themeMode=== "dark"}
            />
            <div className="w-12 h-8 bg-blue-100 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-400 dark:peer-focus:ring-orange-700 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full after:absolute after:content-['🌤️'] after:top-[2px] after:left-[2px] after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all duration-400 dark:border-gray-600 peer-checked:bg-gray-600 peer-checked:after:content-['🌙']"></div> 
             <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">Toggle Theme</span>
        </label>
    );
}