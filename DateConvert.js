var DateConvert = {
	/**
	* author zhuqiyang
	*/
	lunarInfomation:[
		0x04bd8,0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2,//1900-1909
		0x04ae0,0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977,//1910-1919
		0x04970,0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,//1920-1929
		0x06566,0x0d4a0,0x0ea50,0x16a95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,//1930-1939
		0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,//1940-1949
		0x06ca0,0x0b550,0x15355,0x04da0,0x0a5b0,0x14573,0x052b0,0x0a9a8,0x0e950,0x06aa0,//1950-1959
		0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,//1960-1969
		0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b6a0,0x195a6,//1970-1979
		0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570,//1980-1989
		0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x05ac0,0x0ab60,0x096d5,0x092e0,//1990-1999
		0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5,//2000-2009
		0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,//2010-2019
		0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,//2020-2029
		0x05aa0,0x076a3,0x096d0,0x04afb,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,//2030-2039
		0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0,//2040-2049
		0x14b63,0x09370,0x049f8,0x04970,0x064b0,0x168a6,0x0ea50,0x06aa0,0x1a6c4,0x0aae0,//2050-2059
		0x092e0,0x0d2e3,0x0c960,0x0d557,0x0d4a0,0x0da50,0x05d55,0x056a0,0x0a6d0,0x055d4,//2060-2069
		0x052d0,0x0a9b8,0x0a950,0x0b4a0,0x0b6a6,0x0ad50,0x055a0,0x0aba4,0x0a5b0,0x052b0,//2070-2079
		0x0b273,0x06930,0x07337,0x06aa0,0x0ad50,0x14b55,0x04b60,0x0a570,0x054e4,0x0d160,//2080-2089
		0x0e968,0x0d520,0x0daa0,0x16aa6,0x056d0,0x04ae0,0x0a9d4,0x0a2d0,0x0d150,0x0f252,//2090-2099
	],
	
	yearSum:{
		1900:384,1901:354,1902:355,1903:383,1904:354,1905:355,1906:384,1907:354,1908:355,1909:384,
		1910:354,1911:384,1912:354,1913:354,1914:384,1915:354,1916:355,1917:384,1918:355,1919:384,
		1920:354,1921:354,1922:384,1923:354,1924:354,1925:385,1926:354,1927:355,1928:384,1929:354,
		1930:383,1931:354,1932:355,1933:384,1934:355,1935:354,1936:384,1937:354,1938:384,1939:354,
		1940:354,1941:384,1942:355,1943:354,1944:385,1945:354,1946:354,1947:384,1948:354,1949:384,
		1950:354,1951:355,1952:384,1953:354,1954:355,1955:384,1956:354,1957:383,1958:355,1959:354,
		1960:384,1961:355,1962:354,1963:384,1964:355,1965:353,1966:384,1967:355,1968:384,1969:354,
		1970:355,1971:384,1972:354,1973:354,1974:384,1975:354,1976:384,1977:354,1978:355,1979:384,
		1980:355,1981:354,1982:384,1983:354,1984:384,1985:354,1986:354,1987:384,1988:355,1989:355,
		1990:384,1991:354,1992:354,1993:383,1994:355,1995:384,1996:354,1997:355,1998:384,1999:354,
		2000:354,2001:384,2002:354,2003:355,2004:384,2005:354,2006:385,2007:354,2008:354,2009:384,
		2010:354,2011:354,2012:384,2013:355,2014:384,2015:354,2016:355,2017:384,2018:354,2019:354,
		2020:384,2021:354,2022:355,2023:384,2024:354,2025:384,2026:354,2027:354,2028:384,2029:355,
		2030:354,2031:384,2032:355,2033:384,2034:354,2035:354,2036:384,2037:354,2038:354,2039:384,
		2040:355,2041:355,2042:384,2043:354,2044:384,2045:354,2046:354,2047:384,2048:354,2049:355,
		2050:384,2051:355,2052:384,2053:354,2054:354,2055:383,2056:355,2057:354,2058:384,2059:355,
		2060:354,2061:384,2062:354,2063:384,2064:354,2065:355,2066:384,2067:354,2068:355,2069:384,
		2070:354,2071:384,2072:354,2073:354,2074:384,2075:355,2076:354,2077:384,2078:355,2079:354,
		2080:384,2081:354,2082:384,2083:354,2084:355,2085:384,2086:354,2087:355,2088:383,2089:354,
		2090:384,2091:354,2092:355,2093:384,2094:355,2095:354,2096:384,2097:354,2098:354,2099:384,
	},
	
	
	/**
	* 公历转农历
	* @param int year
	* @param int month
	* @param int day
	* @return json object
	*/
	convertSolarToLunar:function (year, month, day)
	{
		year = parseInt(year);
		month = parseInt(month);
		day = parseInt(day);
		var timestamp = -2206425600;
		var date = new Date(year+'/'+month+'/'+day).getTime() - 3600000*8;
		var days = 1 + Math.ceil((date/1000 - timestamp) / 86400);
		
		var sum = 0;
		var count = Object.keys(this.yearSum).length + 1900;
		for (var lunarYear = 1900; lunarYear < count; lunarYear++){
			sum += this.yearSum[lunarYear];
			if(sum >= days){
				break;
			}
		}
		var olddays = this.yearSum[lunarYear] - (sum - days);
		
		var hex = this.lunarInfomation[lunarYear - 1900];
		var sumMonth = 0;
		var leapMonth = hex & 0xf;
		var isleap = false;
		for (var i = 0x08000, month = 1; i >= 0x00010; i >>= 1, month++){
			sumMonth += (hex & i) ? 30 : 29 ;
			if(sumMonth >= olddays){
				break;
			}
			if(leapMonth == month){
				sumMonth += hex & 0xf0000 ? 30 : 29;
				isleap = true;
				if(sumMonth >= olddays){
					break;
				}
			}
		}
		if(leapMonth == month && isleap){
			var currentMonthDays = hex & 0xf0000 ? 30 : 29;
		}else{
			var currentMonthDays = hex & (0x08000 >> month-1) ? 30 : 29;
			leapMonth = '';
		}
		day =  currentMonthDays - (sumMonth - olddays);
		return {'year':lunarYear, 'month':month, 'day':day, 'leapMonth':leapMonth};
	},
	
	
	/**
	* 农历转公历
	* @param int year
	* @param int month
	* @param int day
	* @param int leap 是否为闰月
	* @return json object
	*/
	convertLunarToSolar:function (year, month, day, leap)
	{
		year = parseInt(year);
		month = parseInt(month);
		day = parseInt(day);
		if(typeof leap == undefined) leap = false;
		
		var sum = 0;
		for (var i = 1900; i < year; i++){
			sum += this.yearSum[i];
		}
		var hex = this.lunarInfomation[year - 1900];
		var leapMonth = hex & 0xf;
		for (var i = 0x08000, lunarMonth = 1; i >= 0x00010; i >>= 1, lunarMonth++){
			if(month == lunarMonth){
				break;
			}
			sum += hex & i ? 30 : 29;
			if(leapMonth == lunarMonth){
				sum += hex & 0xf0000 ? 30 : 29;
			}
		}
		if(month == leapMonth && leap){
			sum += hex & (0x08000 >> lunarMonth - 1) ? 30 : 29;
		}
		sum = sum + day;
		
		var count = Object.keys(this.yearSum).length + 1900;
		var solarSum = -30;
		for (var solarYear = 1900; solarYear < count; solarYear++){
			solarSum += this.getSolarYearDays(solarYear);
			if(solarSum >= sum){
				break;
			}
		}
		var sumMonth = this.getSolarYearDays(solarYear) - (solarSum - sum);
		var tempSum = 0;
		for (var i = 0, solarMonth = 1; i < 12; i++, solarMonth++){
			tempSum += this.getSolarMonthDays(solarYear, solarMonth);
			if(tempSum >= sumMonth){
				break;
			}
		}
		var lastMonth = this.getSolarMonthDays(solarYear, solarMonth);
		var day = lastMonth - (tempSum - sumMonth);
		return {'year':solarYear, 'month':solarMonth, 'day':day};
	},
	
	
	/**
	* 获取某个阳历全年天数
	* @param 
	*/
	getSolarYearDays:function (year){
		if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
			return 366;
		}else{
			return 365;
		}
	},
	
	
	/**
	* 获取某个阳历某月天数
	* @param 
	*/
	getSolarMonthDays:function (year, month){
		var days = ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) ? 29 : 28;
		var monthDays = {'1':31,'2':days,'3':31,'4':30,'5':31,'6':30,'7':31,'8':31,'9':30,'10':31,'11':30,'12':31};
		return monthDays[month];
	},
	
	
	/**
	* 获取农历某年全年天数
	* @param 
	*/
	getYearDays:function (year){
		var hex = this.lunarInfomation[year - 1900];
		var sum = 0;
		for (var i = 0x08000; i >= 0x00010; i >>= 1){
			sum += hex & i ? 30 : 29;
		}
		if(hex & 0xf){
			sum += hex & 0xf0000 ? 30 : 29;
		}
		return sum;
	},
	
	
	/**
	* 获取个农历日期到1900年的所有天数
	* @param 
	*/
	getLunarTotalDays:function (year, month, day, leap)
	{
		if(typeof leap == undefined) leap = true;
		for (var sum = 0, lunarYear = 1900; lunarYear < year; lunarYear++){
			sum += this.yearSum[lunarYear];
		}
		hex = this.lunarInfomation[year - 1900];
		for (var i = 0x08000, monthCount = 1; monthCount < month; i >= 0x00010, i >>= 1, monthCount++){
			sum += (hex & i) ? 30 : 29 ;
		}
		leapMonth = hex & 0xf;
		if(leapMonth)
		{
			if(leapMonth < month){
				sum += hex & 0xf0000 ? 30 : 29;
			}else if(leapMonth == month && leap){
				sum += hex & 0xf0000 ? 30 : 29;
			}
		}
		return sum + day;
	},
	
	
	/**
	* 获取流日天干地支的索引值,从0开始
	* @param 
	*/
	getDayGanZhiIndex:function (year, month, day, leap)
	{
		if(typeof leap == undefined) leap = false;
		var days = 43041;
		var differ = this.getLunarTotalDays(year, month, day, leap) - days;
		if(differ < 0){
			differ = -differ;
		}
		return differ % 60;
	},
	
	
	/**
	* 获取农历某月天数
	* @param int year		年
	* @param int month		月
	* @param boolean isLeapMonth	闰月
	* @return int 天数
	*/
	getLunarMonthDays:function (year, month, isLeapMonth)
	{
		if(typeof isLeapMonth == undefined) isLeapMonth = false;
		var hex = this.lunarInfomation[year - 1900];
		if(isLeapMonth){
			if(hex & 0xf){
				return hex & 0xf0000 ? 30 : 29;
			}else{
				return 0;
			}
		}else{
			return (hex & (0x08000 >> month-1)) ? 30 : 29;
		}
	},

	
	/**
	* 获取农历某年闰月的月份,为零的时候没有闰月
	* @param 
	*/
	getLunarLeapMonth:function (year){
		return this.lunarInfomation[year - 1900] & 0xf;
	},
	
	
	/**
	* 某年闰月天数
	* @param 
	*/
	getLunarLeapMonthDays:function (year){
		var hex = this.lunarInfomation[year - 1900];
		if(hex & 0xf){
			return hex & 0xf0000 ? 30 : 29;
		}
		return false;
	},
	
	
	/**
	* 判断某年是否是闰年
	* @param 
	*/
	isLeapYear:function (year){
		return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
	},
	
	
	/**
	* 获取某年闰月月份
	* @param 
	*/
	getLeapMonth:function (year){
		return this.lunarInfomation[year - 1900] & 0xf;
	},
	
	
	/**
	* 获取当前月份的下一月信息
	* @param 
	*/
	getNextMonth:function (year, month){
		month = month + 1;
		if(month > 12){
			month = 1;
			year++;
		}
		return this.getCurrentMonth(year, month);
	},
	
	
	/**
	* 获取当前月份的上一月信息
	* @param 
	*/
	getPrevMonth:function (year, month){
		month = month - 1;
		if(month < 1){
			month = 12;
			year--;
		}
		return this.getCurrentMonth(year, month);
	},
	
	
	/**
	* 获取当前月份的信息
	* @param 
	*/
	getCurrentMonth:function (year, month)
	{
		var leapMonth = this.getLeapMonth(year);
		var prevMonth = month - 1;
		var day1 = day2 = month2 = month1 = leapMonth1 = leapMonth2 = '';
		
		if(leapMonth && month == leapMonth){
			day1 = 1;
			day2 = 15;
			month1 = month;
			month2 = leapMonth2 = month;
		}else if(leapMonth && prevMonth == leapMonth){
			day1 = 16;
			day2 = this.getLunarMonthDays(year, prevMonth);
			month1 = leapMonth1 = prevMonth;
			month2 = month;
		}else{
			day1 = 1;
			day2 = this.getLunarMonthDays(year, month);
			month1 = month;
			month2 = month;
		}
		return {
			'year':year, 
			'month':month, 
			'month1':month1, 
			'day1':day1, 
			'month2':month2, 
			'day2':day2, 
			'leapMonth1':leapMonth1, 
			'leapMonth2':leapMonth2
		};
	},
	
	
	/**
	* 获取下一天信息
	* @param 
	*/
	getNextDay:function (year, month, day, leap)
	{
		var leapMonth = this.getLunarLeapMonth(year);
		day++;
		if(day > this.getLunarMonthDays(year, month, leap)){
			if(!leap && leapMonth == month){ // 当前月份是闰月的上一月
				day = 1;
				leap = leapMonth;
			}else{
				leap = 0;
				day = 1;
				month++;
				if(month > 12){
					month = 1;
					year++;
				}
			}
		}
		return {'year':year, 'month':month, 'day':day, 'leapMonth':leap};
	},
	
	
	/**
	* 获取上一天信息
	* @param 
	*/
	getPrevDay:function (year, month, day, leap)
	{
		var leapMonth = this.getLunarLeapMonth(year);
		day--;
		if(day < 1){
			day = this.getLunarMonthDays(year, month, leap);
			if(leap){ // 当前月份是闰月
				leap = 0;
			}else{
				month--;
				if(month < 1){
					month = 12;
					year--;
				}
				if(month == leapMonth){
					leap = leapMonth;
				}
			}
		}
		return {'year':year, 'month':month, 'day':day, 'leapMonth':leap};
	},

};