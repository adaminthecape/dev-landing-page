import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface ThemeContextType {
	currentTheme: 'light' | 'dark';
	isDarkMode: boolean;
	changeTheme: (newTheme: 'light' | 'dark') => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>(() => {
		const saved = localStorage.getItem('theme');
		if (saved === 'light' || saved === 'dark') {
			return saved;
		}
		return 'light';
	});

	// Apply theme to document on mount and whenever currentTheme changes
	useEffect(() => {
		document.documentElement.classList.remove('light', 'dark');
		document.documentElement.classList.add(currentTheme);
	}, [currentTheme]);

	const isDarkMode = currentTheme === 'dark';

	const changeTheme = (newTheme: 'light' | 'dark') => {
		if (newTheme === currentTheme) {
			return;
		}

		localStorage.setItem('theme', newTheme);
		setCurrentTheme(newTheme);
	};

	return (
		<ThemeContext.Provider value={{ currentTheme, isDarkMode, changeTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
}
