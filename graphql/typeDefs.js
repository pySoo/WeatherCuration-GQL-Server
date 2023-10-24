import { gql } from 'apollo-server';

const typeDefs = gql`
  type Region {
    ID: String
    LocalizedName: String
    EnglishName: String
  }

  type Country {
    ID: String
    LocalizedName: String
    EnglishName: String
  }

  type TimeZone {
    Code: String
    Name: String
    GmtOffset: Float
    IsDaylightSaving: Boolean
    NextOffsetChange: String
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

  type ImperialValue {
    Value: Float
    Unit: String
    UnitType: Int
  }

  type Elevation {
    Metric: MetricValue
    Imperial: ImperialValue
  }

  type Imperial {
    Value: Float
    Unit: String
    UnitType: Int
    Phrase: String
  }

  type Values {
    Metric: Metric
    Imperial: Imperial
  }

  type Temperature {
    Minimum: Metric
    Maximum: Metric
  }

  type GeoPosition {
    Latitude: Float
    Longitude: Float
    Elevation: Elevation
  }

  type Location {
    id: String
    Version: Int
    Key: String
    Type: String
    Rank: Int
    LocalizedName: String
    EnglishName: String
    PrimaryPostalCode: String
    Region: Region
    Country: Country
    TimeZone: TimeZone
    GeoPosition: GeoPosition
    IsAlias: Boolean
    DataSets: [String]
  }

  input CoordinatesInput {
    lat: Float!
    lng: Float!
  }

  type AirAndPollen {
    Name: String
    Value: Int
    Category: String
    CategoryValue: Int
    Type: String
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
  }

  type CurrentConditions {
    locationKey: String!
    LocalObservationDateTime: String
    EpochTime: Int
    WeatherText: String
    WeatherIcon: Int
    HasPrecipitation: Boolean
    PrecipitationType: String
    IsDayTime: Boolean
    Temperature: Values
    RealFeelTemperature: Values
    RelativeHumidity: Int
    Past24HourTemperatureDeparture: Values
    MobileLink: String
    Link: String
  }

  type DailyForecast {
    Date: String
    EpochDate: Int
    Temperature: Temperature
    RealFeelTemperature: Temperature
    AirAndPollen: [AirAndPollen]
    Day: Day
    Night: Day
    Sources: [String]
    MobileLink: String
    Link: String
  }

  type FiveDaysForecast {
    locationKey: String!
    DailyForecasts: [DailyForecast!]!
  }

  type HoursForecast {
    DateTime: String
    EpochDateTime: Int
    WeatherIcon: Int
    IconPhrase: String
    HasPrecipitation: Boolean
    PrecipitationType: String
    PrecipitationIntensity: String
    IsDaylight: Boolean
    Temperature: Metric
    RealFeelTemperature: Metric
    RelativeHumidity: Int
    UVIndex: Int
    UVIndexText: String
    RainProbability: Int
    SnowProbability: Int
    IceProbability: Int
    TotalLiquid: Metric
    MobileLink: String
    Link: String
  }

  type TwelveHoursForecast {
    locationKey: String!
    HoursForecasts: [HoursForecast!]!
  }

  type ShoppingItems {
    title: String!
    link: String!
    image: String!
    lprice: String!
    category1: String!
  }

  type Query {
    shoppingList(keyword: String!): [ShoppingItems]
    coordLocation(coordinates: CoordinatesInput!): Location!
    currentCondition(locationKey: String!): CurrentConditions!
    fiveDaysForecast(locationKey: String!): FiveDaysForecast!
    twelveHoursForecast(locationKey: String!): TwelveHoursForecast!
  }
`;

export default typeDefs;
