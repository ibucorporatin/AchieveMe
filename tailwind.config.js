/** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                'c-bold': ['Poppins-Bold'],
                'c-semibold': ['Poppins-SemiBold'],
                'c-medium': ['Poppins-Medium'],
                'c-regular': ['Poppins-Regular'],
                'c-light': ['Poppins-Light'],
                'c-extrabold': ['Poppins-ExtraBold'],
                'c-thin': ['Poppins-Thin'],
                'c-mediumitalic': ['Poppins-MediumItalic'],
            },
            fontSize: {
                '8': '8px',
                '9': '9px',
                '10': '10px',
                '11': '11px',
                '12': '12px',
                '13': '13px',
                '14': '14px',
                '15': '15px',
                '16': '16px',
                '17': '17px',
                '18': '18px',
                '19': '19px',
                '20': '20px',
                '21': '21px',
                '22': '22px',
                '23': '23px',
                '24': '24px',
                '25': '25px',
                '26': '26px',
                '27': '27px',
                '28': '28px',
                '29': '29px',
                '30': '30px',
            },
            colors: {
                'primary': '#427594',
                'secondary': '#0B78BC',
                "success": "#2AD18E",
                "text": "#444",
                "root": '#0B78BC10',
                "light":"#EEF5F9",
                "teritory": {
                    '500': '#5296BF',
                    '800': '#36ABF5'
                }
            },
            backgroundColors: {
                'primary': '#427594',
                'secondary': '#0B78BC',
                "success": "#2AD18E",
                "text": "#444",
                "root": '#0B78BC10',
                "light":"#EEF5F9",
                "teritory": {
                    '500': '#5296BF',
                    '800': '#36ABF5'
                },
                
            },
            borderColor: {
                'primary': '#427594',
                'secondary': '#0B78BC',
                "success": "#2AD18E",
                "text": "#444",
                "root": '#0B78BC10',
                "light":"#EEF5F9",
                "teritory": {
                    '500': '#5296BF',
                    '800': '#36ABF5'
                },
              
            }
            
        }
    },
    plugins: [],
  }