import React from 'react';
import base from '../../base';
import MapImg from './map.png';
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css';

class CustomerTimeline extends React.Component {

    constructor() {

        super();

    }

    render() {
      const timeline = this.props.timeline;
      if(!timeline) {
        return (
          <div>Searching for expert...</div>
        );
      }
      return (
        <ul className="slds-timeline">
            {Object.keys(this.props.timeline).reverse().map((key)=>this.renderTimelineItem(key, timeline[key]))}
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

    renderTimelineItem(time, status) {
        return (
          <li>
            <div className="slds-timeline__item">
              <span className="slds-assistive-text">Task</span>
              <div className="slds-media">
                <div className="slds-media__body">
                  <div className="slds-media slds-timeline__media slds-timeline__media_task">
                    <div className="slds-media__figure slds-timeline__icon">
                      <div className="slds-icon_container slds-icon-standard-task" title="task">
                        <svg className="slds-icon slds-icon_small" aria-hidden="true">
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
                    <p className="slds-timeline__date">{time}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
    }

}

CustomerTimeline.contextTypes = {
    router: React.PropTypes.object
};

export default CustomerTimeline;