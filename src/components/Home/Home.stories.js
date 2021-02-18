import React from 'react';
import { Provider } from 'react-redux';
import { action } from '@storybook/addon-actions'
import { PureHomeScreen } from './Home';
import * as TaskListStories from '../TaskList/TaskList.stories'


/* Mock context of the store */
const store = {
    getState: () => {
        return {
            tasks: TaskListStories.Default.args.tasks,
        }
    },
    subscribe: () => 0,
    dispatch: action('dispatch'),
}

export default {
    component: PureHomeScreen,
    decorators: [story => <Provider store={store}>{story()}</Provider>],
    title: 'HomeScreen',
  };
  
  const Template = args => <PureHomeScreen {...args} />;
  
  export const Default = Template.bind({});

  
  export const Error = Template.bind({});
  Error.args = {
    error: 'Something',
  };