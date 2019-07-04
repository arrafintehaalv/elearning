import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";
const StartTabs = () => {
  Promise.all([
    Icon.getImageSource("md-map", 30),
    Icon.getImageSource("ios-share-alt", 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "awesome-places.SharePlaceScreen",
          title: "SharePlace",
          label: "SharePlace",
          icon: sources[0]
        },
        {
          screen: "awesome-places.FindPlaceScreen",
          title: "FindPlace",
          label: "FindPlace",
          icon: sources[1]
        }
      ]
    });
  });
};

export default StartTabs;
