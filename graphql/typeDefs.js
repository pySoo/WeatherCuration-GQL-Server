const typeDefs = `#graphql
  type ShoppingItem {
    title: String!
    link: String!
    image: String!
    lprice: String!
  }

  type ShoppingList {
    keyword: String!
    shoppingData: [ShoppingItem]
  }

  type Metric {
    Value: Float
    Unit: String
    UnitType: Int
    Phrase: String
  }

  type MetricValue {
    Value: Float
    Unit: String
    UnitType: Int
  }

  type Values {
    Metric: Metric
  }

  type PrecipitationSummary {
    Precipitation: Values
    PastHour: Values
    Past3Hours: Values
    Past6Hours: Values
    Past9Hours: Values
    Past12Hours: Values
    Past18Hours: Values
    Past24Hours: Values
  }

  type CurrentConditions {
    IsDayTime: Boolean
    CloudCover: Int
    PrecipitationType: String
    PrecipitationSummary: PrecipitationSummary
    PastHour: Values
    UVIndex: Int
    Temperature: Values
    WeatherText: String
    RelativeHumidity: Int
  }

  type Temperature {
    Minimum: Metric
    Maximum: Metric
  }

  type Day {
    Icon: Int
    IconPhrase: String
    HasPrecipitation: Boolean
    RainProbability: Int
    SnowProbability: Int
    IceProbability: Int
    HoursOfRain: Float
    HoursOfSnow: Float
    HoursOfIce: Float
    PrecipitationType: String
    PrecipitationProbability: Int
    CloudCover: Int
    ThunderstormProbability: Int
  }

  type Sun {
    Rise: String
    EpochRise: Int
    Set: String
    EpochSet: Int
  }

  type DailyForecast {
    Date: String
    Temperature: Temperature
    Day: Day
    Night: Day
    Sun: Sun
  }

  type FiveDaysForecasts {
    DailyForecasts: [DailyForecast!]!
  }

  type Query {
    getShoppingList(keyword: String!): ShoppingList!
    getCurrentCondition(locationKey: String!): CurrentConditions!
    getFiveDaysForecast(locationKey: String!): FiveDaysForecasts!
  }
`;

export default typeDefs;
