import React from 'react';
import { shallow } from 'enzyme';
import {
    Button,
    Provider as PaperProvider
} from 'react-native-paper';
import { InfoPanel } from './index';

const renderComponent = props => (
    <PaperProvider>
        <InfoPanel {...props} />
    </PaperProvider>
);

const defaultProps = {
    icon: 'warning',
    text: 'dummy text'
};

describe('InfoPanel', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('Without actions', () => {
        it('should render as expected', () => {
            // eslint-disable-next-line lodash/prefer-lodash-method
            const wrapper = shallow(renderComponent(defaultProps))
                .find(InfoPanel)
                .dive();

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('With actions', () => {
        const onAction1 = jest.fn();
        const onAction2 = jest.fn();
        const props = {
            ...defaultProps,
            actions: [
                {
                    text: 'action 1',
                    action: onAction1
                },
                {
                    text: 'action 2',
                    action: onAction2
                }
            ]
        };

        it('should render as expected', () => {
            // eslint-disable-next-line lodash/prefer-lodash-method
            const wrapper = shallow(renderComponent(props))
                .find(InfoPanel)
                .dive();

            expect(wrapper).toMatchSnapshot();
        });

        it('should execute action 1 onPress', () => {
            // eslint-disable-next-line lodash/prefer-lodash-method
            const onPress = shallow(renderComponent(props))
                .find(InfoPanel)
                .dive()
                .find(Button)
                .at(0)
                .prop('onPress');

            onPress();

            expect(onAction1).toHaveBeenCalledTimes(1);
        });

        it('should execute action 2 onPress', () => {
            // eslint-disable-next-line lodash/prefer-lodash-method
            const onPress = shallow(renderComponent(props))
                .find(InfoPanel)
                .dive()
                .find(Button)
                .at(1)
                .prop('onPress');

            onPress();

            expect(onAction2).toHaveBeenCalledTimes(1);
        });
    });
});
