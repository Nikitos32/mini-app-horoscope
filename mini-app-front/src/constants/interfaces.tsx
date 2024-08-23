export interface FetchResponse {
  horoscope: Horoscope;
}

export interface Horoscope {
  aquarius: ZodiacSign;
  aries: ZodiacSign;
  cancer: ZodiacSign;
  capricorn: ZodiacSign;
  gemini: ZodiacSign;
  leo: ZodiacSign;
  libra: ZodiacSign;
  pisces: ZodiacSign;
  sagittarius: ZodiacSign;
  scorpio: ZodiacSign;
  taurus: ZodiacSign;
  virgo: ZodiacSign;
}

export interface ZodiacSign {
  signDescription: string;
}

export interface Sign {
  horoscope: string;
  sign: string;
}
