import React from 'react';
import styled from 'styled-components/native';
import { Surface, Caption } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

export const InfoPanelRoot = styled(Surface)`
    display: flex;
    flex-direction: row;
    align-items: center;
    elevation: 2;
    margin: 2px;
    padding: 5px;
    background-color: ${({ theme: { colors: { background } } }) => background};
`;

export const InfoPanelIcon = styled(AntDesign)`
    color: ${({ theme: { colors: { placeholder } } }) => placeholder};
`;

export const InfoPanelText = styled(Caption)`
    margin-left: 10px;
    flex: 1;
`;

export const InfoPanel = ({
    icon,
    text
}) => (
    <InfoPanelRoot>
        <InfoPanelIcon
            name={icon}
            size={24}
        />
        <InfoPanelText>{text}</InfoPanelText>
    </InfoPanelRoot>
);
