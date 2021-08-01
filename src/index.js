import React from 'react';
import styled from 'styled-components/native';
import map from 'lodash/map';
import { Surface, Caption, Button } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

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
    color: ${({ theme: { colors: { placeholder } } }) => placeholder};
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
    text,
    actions
}) => (
    <InfoPanelRoot>
        <InfoPanelMessage>
            <InfoPanelIcon
                name={icon}
                size={24}
            />
            <InfoPanelText>{text}</InfoPanelText>
        </InfoPanelMessage>
        {renderActions(actions)}
    </InfoPanelRoot>
);
