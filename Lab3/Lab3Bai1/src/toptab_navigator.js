import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CategoriesOne from './toptab_categories_one';
import CategoriesTwo from './toptab_categories_two';
import CategoriesThree from './toptab_categories_three';

export default function TopTabNavigator() {
   const Tab = createMaterialTopTabNavigator();
   return (
      <Tab.Navigator initialRouteName='Categories One'>
         <Tab.Screen name="Categories One" component={CategoriesOne} />
         <Tab.Screen name="Categories Two" component={CategoriesTwo} />
         <Tab.Screen name="Categories Three" component={CategoriesThree} />
      </Tab.Navigator>
   );
}