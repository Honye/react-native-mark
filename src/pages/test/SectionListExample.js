'use strict';

import React from 'react';
import {
    Animated,
    Button,
    SectionList,
    StyleSheet,
    Text,
    View,
} from 'react-native';


const {
    HeaderComponent,
    FooterComponent,
    ItemComponent,
    SeparatorComponent,
    genItemData,
    pressItem,
    renderStackedItem,
} = require('./ListExampleShared');

const AnimatedSectionList = Animated.createAnimatedComponent(SectionList);

const VIEWABILITY_CONFIG = {
    minimumViewTime: 3000,
    viewAreaCoveragePercentThreshold: 100,
    waitForInteraction: true,
};

const renderSectionHeader = ({ section }) => (
    <View style={styles.header}>
        <Text style={styles.headerText}>SECTION HEADER: {section.key}</Text>
        <SeparatorComponent />
    </View>
);

const renderSectionFooter = ({ section }) => (
    <View style={styles.header}>
        <Text style={styles.headerText}>SECTION FOOTER: {section.key}</Text>
        <SeparatorComponent />
    </View>
);

const CustomSeparatorComponent = ({ highlighted, text }) => (
    <View style={[styles.customSeparator, highlighted && { backgroundColor: 'rgb(217, 217, 217)' }]}>
        <Text style={styles.separatorText}>{text}</Text>
    </View>
);

class SectionListExample extends React.PureComponent {

    state = {
        data: genItemData(100),
        filterText: '',
        logViewable: false,
        virtualized: true,
    };

    _sectionListRef;
    _captureRef = (ref) => { this._sectionListRef = ref; };

    _scrollToLocation(sectionIndex, itemIndex) {
        this._sectionListRef
            .getNode()
            .scrollToLocation({ sectionIndex, itemIndex });
    }

    render() {
        const filteredData = this.state.data;
        const filteredSectionData = [];
        let startIndex = 0;
        const endIndex = filteredData.length - 1;
        for (let ii = 10; ii <= endIndex + 10; ii += 10) {
            filteredSectionData.push({
                key: `${filteredData[startIndex].key} - ${filteredData[Math.min(ii - 1, endIndex)].key}`,
                data: filteredData.slice(startIndex, ii),
            });
            startIndex = ii;
        }
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={styles.searchRow}>
                        <View style={styles.scrollToRow}>
                            <Text>scroll to:</Text>
                            <Button title="Item A" onPress={() => this._scrollToLocation(2, 0)} />
                            <Button title="Item B" onPress={() => this._scrollToLocation(3, 6)} />
                            <Button title="Item C" onPress={() => this._scrollToLocation(6, 3)} />
                        </View>
                    </View>
                    <SeparatorComponent />
                    <AnimatedSectionList
                        ref={this._captureRef}
                        ListHeaderComponent={HeaderComponent}
                        ListFooterComponent={FooterComponent}
                        SectionSeparatorComponent={(info) => <CustomSeparatorComponent {...info} text="SECTION SEPARATOR" /> }
                        ItemSeparatorComponent={(info) => <CustomSeparatorComponent {...info} text="ITEM SEPARATOR" /> }
                        debug={false}
                        enableVirtualization={true}
                        onRefresh={() => alert('onRefresh: nothing to refresh :P')}
                        refreshing={false}
                        renderItem={this._renderItemComponent}
                        renderSectionHeader={renderSectionHeader}
                        renderSectionFooter={renderSectionFooter}
                        stickySectionHeadersEnabled
                        sections={[
                            {
                                key: 'empty section',
                                data: [],
                            },
                            {
                                renderItem: renderStackedItem,
                                key: 's1',
                                data: [
                                    { title: 'Item In Header Section', text: 'Section s1', key: 'header item' },
                                ],
                            },
                            {
                                key: 's2',
                                data: [
                                    { noImage: true, title: '1st item', text: 'Section s2', key: 'noimage0' },
                                    { noImage: true, title: '2nd item', text: 'Section s2', key: 'noimage1' },
                                ],
                            },
                            ...filteredSectionData,
                        ]}
                        style={styles.list}
                        viewabilityConfig={VIEWABILITY_CONFIG}
                    />
                </View>
            </View>
        );
    }

    _renderItemComponent = ({ item, separators }) => (
        <ItemComponent
            item={item}
            onPress={this._pressItem}
            onHideUnderlay={separators.unhighlight}
            onShowUnderlay={separators.highlight}
        />
    );

    _pressItem = (key) => {
        !isNaN(key) && pressItem(this, key);
    };
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e9eaed',
        flex: 1,
    },
    wrapper: {
        flex: 1,
        paddingTop: 10,
    },
    customSeparator: {
        backgroundColor: 'rgb(200, 199, 204)',
    },
    header: {
        backgroundColor: '#e9eaed',
    },
    headerText: {
        padding: 4,
        fontWeight: '600',
    },
    list: {
        backgroundColor: 'white',
    },
    searchRow: {
        paddingHorizontal: 10,
    },
    scrollToRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
    },
    separatorText: {
        color: 'gray',
        alignSelf: 'center',
        fontSize: 7,
    },
});

module.exports = SectionListExample;
