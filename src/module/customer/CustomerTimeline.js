import React from 'react';
import base from '../../base';
import MapImg from './map.png';
import moment from 'moment';
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css';

class CustomerTimeline extends React.Component {

    constructor() {

        super();

    }

    render() {
      const order = this.props.order;
      const timeline = order.Timeline;
      if(!timeline) {
        return (
          <div>Searching for expert...</div>
        );
      }

      return (
        <ul className="slds-timeline">
            {this.renderTimelineItem("Complete", timeline)}
            {this.renderTimelineItem("Delivering", timeline)}
            {this.renderTimelineItem("Picking Up", timeline)}
            {this.renderTimelineItem("Accepted", timeline)}
        </ul>
      );
    }

    renderItemBody(status) {
      if(status === "Delivering") {
        const style = {
          padding: "10px 10px 10px 10px"
        };

        return (
          <img style={style} src={MapImg} alt="" />
        );
      }
    }

    renderItemIcon(status) {
      return (
        <use xlinkHref="/symbols.svg#check"></use>
      )
    }

    renderTimelineItem(status, timeline) {
      const style = {
        padding: "2px 2px 2px 2px"
      };

      if(!timeline || !timeline[status]) {
        return null;
      }
      return (
        <li>
          <div className="slds-timeline__item">
            <span className="slds-assistive-text">Task</span>
            <div className="slds-media">
              <div className="slds-media__body">
                <div className="slds-media slds-timeline__media slds-timeline__media_task">
                  <div className="slds-media__figure slds-timeline__icon">
                    <div className="slds-icon_container slds-icon-standard-task" title="task">
                      <svg style={style} className="slds-icon slds-icon_small" aria-hidden="true">
                        {this.renderItemIcon(status)}
                      </svg>
                    </div>
                  </div>
                  <div className="slds-media__body">
                    <div className="slds-media">
                      <div className="slds-media__body">
                        <h3 className="slds-truncate">{status}</h3>
                        {this.renderItemBody(status)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slds-media__figure slds-media__figure_reverse">
                <div className="slds-timeline__actions">
                  <p className="slds-timeline__date">{moment(timeline[status]).tz("America/Chicago").format('h:mm:ss a')}</p>
                </div>
              </div>
            </div>
          </div>
        </li>
      );
    }

}

export default CustomerTimeline;