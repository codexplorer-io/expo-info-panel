import React from 'react';
import styled from 'styled-components/native';
import map from 'lodash/map';
import { Surface, Caption, Button } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

export const INFO_PANEL_TYPE = {
    info: 'info',
    warning: 'warning',
    error: 'error'
};

const getColor = ({ type, colors }) => ({
    [INFO_PANEL_TYPE.info]: colors.placeholder,
    [INFO_PANEL_TYPE.warning]: colors.warning,
    [INFO_PANEL_TYPE.error]: colors.error
})[type];

const InfoPanelRoot = styled(Surface)`
    display: flex;
    flex-direction: column;
    elevation: 2;
    margin: 2px;
    padding: 5px;
    background-color: ${({ theme: { colors: { background } } }) => background};
`;

const InfoPanelMessage = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const InfoPanelIcon = styled(AntDesign)`
    color: ${({ theme: { colors }, type }) => getColor({ type, colors })};
`;

const InfoPanelText = styled(Caption)`
    margin-left: 10px;
    flex: 1;
`;

const InfoPanelActions = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;
    margin-top: 5px;
`;

const renderActions = actions => actions && (
    <InfoPanelActions>
        {map(actions, ({ text, action }) => (
            <Button
                key={text}
                mode='text'
                onPress={action}
                labelStyle={{ fontSize: 12 }}
            >
                {text}
            </Button>
        ))}
    </InfoPanelActions>
);

export const InfoPanel = ({
    icon,
    type = INFO_PANEL_TYPE.info,
    text,
    actions
}) => (
    <InfoPanelRoot>
        <InfoPanelMessage>
            <InfoPanelIcon
                name={icon}
                size={24}
                type={type}
            />
            <InfoPanelText>{text}</InfoPanelText>
        </InfoPanelMessage>
        {renderActions(actions)}
    </InfoPanelRoot>
);
