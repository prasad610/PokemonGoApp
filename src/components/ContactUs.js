import React, {Component} from 'react';
import constants from '../utility/Constants';
import styles from '../assets/StyleSheets/styles';

class ContactUs extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>
          {constants.feedbackMessage + constants.emailID}
        </Text>
        <Button
          onPress={() =>
            Linking.openURL('mailto:'+constants.emailID)
          }
          title="Send mail"
        />
      </View>
    );
  }
}
