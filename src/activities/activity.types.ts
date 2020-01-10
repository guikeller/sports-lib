import {DataInterface} from '../data/data.interface';
import {DataSpeedAvg} from '../data/data.speed-avg';
import {DataPaceAvg} from '../data/data.pace-avg';
import {DataSwimPaceAvg} from '../data/data.swim-pace-avg';
import {DataPace} from '../data/data.pace';
import {DataSpeed} from '../data/data.speed';
import {DataSwimPace} from '../data/data.swim-pace';
import {DataVerticalSpeedAvg} from '../data/data.vertical-speed-avg';

export class ActivityTypesHelper {
  static getActivityTypesAsUniqueArray(): string[] {
    return Array.from(new Set(Object.keys(ActivityTypes).reduce((array: string[], key: string) => {
      array.push(ActivityTypes[<keyof typeof ActivityTypes>key]); // Important get the key via the enum else it will be chaos
      return array;
    }, []))).sort((left, right) => {
      if (left < right) {
        return -1;
      }
      if (left > right) {
        return 1;
      }
      return 0;
    });
  }
  static averageSpeedDerivedMetricsToUseForActivityType(activityType: ActivityTypes): string[]{
    switch (activityType) {
      case ActivityTypes.Running:
        return [DataPaceAvg.type];
      case ActivityTypes['Trail Running']:
        return [DataPaceAvg.type, DataVerticalSpeedAvg.type];
      case ActivityTypes.Treadmill:
      case ActivityTypes['Track and Field']:
      case ActivityTypes['Elliptical trainer']:
        return [DataPaceAvg.type];
      case ActivityTypes.Swimming:
      case ActivityTypes['Open Water Swimming']:
      case ActivityTypes.swimming_lap_swimming:
        return [DataSpeedAvg.type, DataSwimPaceAvg.type];
      default:
        return [DataSpeedAvg.type]
    }
  }
  static speedDerivedMetricsToUseForActivityType(activityType: ActivityTypes): string[]{
    switch (activityType) {
      case ActivityTypes.Running:
      case ActivityTypes['Trail Running']:
      case ActivityTypes.Treadmill:
      case ActivityTypes['Track and Field']:
      case ActivityTypes['Elliptical trainer']:
        return [DataPace.type];
      case ActivityTypes.Swimming:
      case ActivityTypes['Open Water Swimming']:
      case ActivityTypes.swimming_lap_swimming:
        return [DataSpeed.type, DataSwimPace.type];
      default:
        return [DataSpeed.type]
    }
  }
}

/**
 * This enum works like a all matchers for normalized sport types between different naming across services
 */
export enum ActivityTypes {
  'unknown' = 'Unknown sport',
  'Unknown sport' = 'Unknown sport',
  'undefined' = 'Unknown sport',
  'generic' = 'Generic',
  'Generic' = 'Generic',
  'transition' = 'Transition',
  'Transition' = 'Transition',
  'fitness_equipment' = 'Fitness Equipment',
  'Fitness Equipment' = 'Fitness Equipment',
  'Not specified sport' = 'Unknown sport',
  'Other' = 'Unknown sport',
  'Multisport' = 'Multisport',
  'multisport' = 'Multisport',
  'running_virtual_activity' = 'Running',
  'Run' = 'Running',
  'run' = 'Running',
  'running_track' = 'Running',
  'running_trail' = 'Trail Running',
  'Running' = 'Running',
  'running' = 'Running',
  'Cycling' = 'Cycling',
  'cycling' = 'Cycling',
  'cycling_road' = 'Cycling',
  'cycling_track_cycling' = 'Cycling',
  'cycling_gravel_cycling' = 'Cycling',
  'Biking' = 'Cycling',
  'biking' = 'Cycling',
  'e_biking' = 'E Biking',
  'E Biking' = 'E Biking',
  'cycling_mountain' = 'Mountain biking',
  'MountainBiking' = 'Mountain biking',
  'Mountain Biking' = 'Mountain biking',
  'cycling_cyclocross' = 'Mountain biking',
  'mountain' = 'Mountain biking',
  'Mountain biking' = 'Mountain biking',
  'motorcycling' = 'Motorcycling',
  'Motorcycling' = 'Motorcycling',
  'boating' = 'Boating',
  'Boating' = 'Boating',
  'driving' = 'Driving',
  'Driving' = 'Driving',
  'Swimming' = 'Swimming',
  'swimming' = 'Swimming',
  'Swim' = 'Swimming',
  'swim' = 'Swimming',
  'basketball' = 'Basketball',
  'soccer' = 'Soccer',
  'american_football' = 'American footBall',
  'American footBall' = 'American footBall',
  'Skating' = 'Skating',
  'Aerobics' = 'Aerobics',
  'YogaPilates' = 'YogaPilates',
  'training_yoga' = 'Yoga',
  'yoga' = 'Yoga',
  'Yoga' = 'Yoga',
  'Trekking' = 'Trekking',
  'Walking' = 'Walking',
  'walking' = 'Walking',
  'Walk' = 'Walking',
  'walk' = 'Walking',
  'Sailing' = 'Sailing',
  'sailing' = 'Sailing',
  'Kayaking' = 'Kayaking',
  'kayaking' = 'Kayaking',
  'rafting' = 'Rafting',
  'Rafting' = 'Rafting',
  'rowing' = 'Rowing',
  'Rowing' = 'Rowing',
  'Climbing' = 'Climbing',
  'cycling_indoor_cycling' = 'Indoor Cycling',
  'Indoorcycling' = 'Indoor Cycling',
  'indoor_cycling' = 'Indoor Cycling',
  'Indoor cycling' = 'Indoor Cycling',
  'Indoor Cycling' = 'Indoor Cycling',
  'cycling_virtual_activity' = 'Indoor Cycling',
  'Circuit training' = 'Circuit training',
  'Triathlon' = 'Triathlon',
  'Alpine skiing' = 'Alpine skiing',
  'alpine_skiing' = 'Alpine skiing',
  'alpine_skiing_downhill' = 'Alpine skiing',
  'Backcountry skiing' = 'Backcountry Skiing',
  'Backcountry Skiing' = 'Backcountry Skiing',
  'cross_country_skiing_backcountry' = 'Backcountry Skiing',
  'Snowboarding' = 'Snowboarding',
  'snowboarding' = 'Snowboarding',
  'running_street' = 'Running',
  'Crosscountry skiing' = 'Crosscountry Skiing',
  'Crosscountry Skiing' = 'Crosscountry Skiing',
  'cross_country_skiing' = 'Crosscountry Skiing',
  'backcountry' = 'Crosscountry Skiing',
  'downhill' = 'Downhill skiing',
  'Downhill skiing' = 'Downhill skiing',
  'Weight training' = 'Weight training',
  'Basketball' = 'Basketball',
  'Soccer' = 'Soccer',
  'Ice Hockey' = 'Ice Hockey',
  'Volleyball' = 'Volleyball',
  'Football' = 'Football',
  'Softball' = 'Softball',
  'Cheerleading' = 'Cheerleading',
  'Baseball' = 'Baseball',
  'tennis' = 'Tennis',
  'Tennis' = 'Tennis',
  'Badminton' = 'Badminton',
  'Table tennis' = 'Table Tennis',
  'Table Tennis' = 'Table Tennis',
  'Racquet ball' = 'Racquet ball',
  'Squash' = 'Squash',
  'Combat sport' = 'Combat sport',
  'Boxing' = 'Boxing',
  'Floorball' = 'Floorball',
  'Scuba diving' = 'Scuba Diving',
  'Scuba Diving' = 'Scuba Diving',
  'Free diving' = 'Free Diving',
  'diving' = 'Diving',
  'Diving' = 'Diving',
  'diving_apnea_hunting' = 'Diving',
  'Snorkeling' = 'Snorkeling',
  'Swimrun' = 'Swimrun',
  'Duathlon' = 'Duathlon',
  'Aquathlon' = 'Aquathlon',
  'Adventure Racing' = 'Adventure Racing',
  'Bowling' = 'Bowling',
  'Cricket' = 'Cricket',
  'Crosstrainer' = 'Crosstrainer',
  'Dancing' = 'Dancing',
  'Golf' = 'Golf',
  'golf' = 'Golf',
  'hang_gliding' = 'Hang gliding',
  'Hang gliding' = 'Hang gliding',
  'horseback_riding' = 'Horseback Riding',
  'Horseback Riding' = 'Horseback Riding',
  'Gymnastics' = 'Gymnastics',
  'Handball' = 'Handball',
  'Horseback riding' = 'Horseback riding',
  'Ice Skating' = 'Ice Skating',
  'ice_skating' = 'Ice Skating',
  'ice skating' = 'Ice Skating',
  'Ice skating' = 'Ice Skating',
  'fitness_equipment_indoor_rowing' = 'Indoor Rowing',
  'Indoor Rowing' = 'Indoor Rowing',
  'indoor_rowing' = 'Indoor Rowing',
  'Canoeing' = 'Canoeing',
  'Motorsports' = 'Motorsports',
  'Mountaineering' = 'Mountaineering',
  'mountaineering' = 'Mountaineering',
  'Orienteering' = 'Orienteering',
  'Rugby' = 'Rugby',
  'Ski Touring' = 'Ski Touring',
  'Stretching' = 'Stretching',
  'training_strength_training' = 'Strength Training',
  'fitness_equipment_strength_training' = 'Strength Training',
  'strength_training' = 'Strength Training',
  'Strength training' = 'Strength Training',
  'strength training' = 'Strength Training',
  'Strength Training' = 'Strength Training',
  'Telemark skiing' = 'Telemark skiing',
  'Track and Field' = 'Track and Field',
  'Trail Running' = 'Trail Running',
  'Trail running' = 'Trail Running',
  'trail_running' = 'Trail Running',
  'trail' = 'Trail Running',
  'swimming_open_water' = 'Open Water Swimming',
  'swimming_lap_swimming' = 'Swimming',
  'Open water swimming' = 'Open Water Swimming',
  'open water swimming' = 'Open Water Swimming',
  'Open Water Swimming' = 'Open Water Swimming',
  'open_water' = 'Open Water Swimming',
  'Nordic walking' = 'Nordic walking',
  'Snow shoeing' = 'Snow shoeing',
  'Windsurfing/Surfing' = 'Windsurfing',
  'windsurfing' = 'Windsurfing',
  'Windsurfing' = 'Windsurfing',
  'Kettlebell' = 'Kettlebell',
  'Roller skiing' = 'Roller skiing',
  'paddling' = 'Paddling',
  'Paddling' = 'Paddling',
  'flying' = 'Flying',
  'Flying' = 'Flying',
  'Cross fit' = 'Cross fit',
  'cross_fit' = 'Cross fit',
  'Kitesurfing/Kiting' = 'Kitesurfing',
  'kitesurfing' = 'Kitesurfing',
  'Kitesurfing' = 'Kitesurfing',
  'tactical' = 'Tactical',
  'Tactical' = 'Tactical',
  'jumpmaster' = 'Jumpmaster',
  'Jumpmaster' = 'Jumpmaster',
  'boxing' = 'Boxing',
  'floor_climbing' = 'Floor Climbing',
  'Floor climbing' = 'Floor Climbing',
  'Floor Climbing' = 'Floor Climbing',
  'Paragliding' = 'Paragliding',
  'running_treadmill' = 'Treadmill',
  'Treadmill' = 'Treadmill',
  'treadmill' = 'Treadmill',
  'Indoor running' = 'Indoor Running',
  'Indoor Running' = 'Indoor Running',
  'running_indoor' = 'Indoor Running',
  'running_indoor_running' = 'Indoor Running',
  'Frisbee' = 'Frisbee',
  'Indoor training' = 'Indoor training',
  'Hiking' = 'Hiking',
  'hiking_trail' = 'Hiking',
  'hiking' = 'Hiking',
  'hike' = 'Hiking',
  'Hike' = 'Hiking',
  'Fishing' = 'Fishing',
  'fishing' = 'Fishing',
  'Hunting' = 'Hunting',
  'hunting' = 'Hunting',
  'route' = 'Route',
  'Route' = 'Route',
  'inline_skating' = 'Inline Skating',
  'Inline Skating' = 'Inline Skating',
  'Inline skating' = 'Inline Skating',
  'rock_climbing' = 'Rock Climbing',
  'Rock Climbing' = 'Rock Climbing',
  'Rock climbing' = 'Rock Climbing',
  'sky_diving' = 'Sky Diving',
  'Sky Diving' = 'Sky Diving',
  'Sky diving' = 'Sky Diving',
  'sky diving' = 'Sky Diving',
  'snowshoeing' = 'Snowshoeing',
  'Snowshoeing' = 'Snowshoeing',
  'snowmobiling' = 'Snowmobiling',
  'Snowmobiling' = 'Snowmobiling',
  'stand_up_paddleboarding' = 'Stand up paddling',
  'Standup paddling (SUP)' = 'Stand up paddling',
  'Stand up paddling' = 'Stand up paddling',
  'stand up paddling' = 'Stand up paddling',
  'Stand Up Paddling' = 'Stand up paddling',
  'Stand up Paddling' = 'Stand up paddling',
  'surfing' = 'Surfing',
  'Surfing' = 'Surfing',
  'wakeboarding' = 'Wakeboarding',
  'Wakeboarding' = 'Wakeboarding',
  'water_skiing' = 'Water skiing',
  'Water skiing' = 'Water skiing',
  'Water Skiing' = 'Water skiing',
  'training_flexibility_training' = 'Flexibility Training',
  'flexibility_training' = 'Flexibility Training',
  'Flexibility Training' = 'Flexibility Training',
  'training' = 'Training',
  'Training' = 'Training',
  'cardio_training' = 'Cardio Training',
  'training_cardio_training' = 'Cardio Training',
  'Cardio Training' = 'Cardio Training',
  'fitness_equipment_elliptical' = 'Elliptical trainer',
  'Elliptical trainer' = 'Elliptical trainer'
}
