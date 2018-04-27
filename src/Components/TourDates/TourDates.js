import React, {Component} from 'react';
import Show from './Show/Show';

class TourDates extends Component {
  state = {
    tourDates: [
      {
        city: 'Seattle',
        state: 'WA',
        date: '4/28',
        venue: 'Neptune'
      },
      {
        city: 'Boise',
        state: 'Idaho',
        date: '5/1',
        venue: 'Yada yada\'s'
      }
    ]
  }

  render() {

    let why = this.state.tourDates.map(show => {
        return (
          <Show city={show.city} state={show.state}
          date={show.date} venue={show.venue} />
        );
      }
    );
    
    return (
      <div>
        {why}
      </div>
    );
  }
}

export default TourDates;
