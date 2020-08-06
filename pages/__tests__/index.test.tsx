import React from 'react';
import {mount} from 'enzyme';
import HomePage from "../index";
import {describe, expect, it} from "@jest/globals";

describe('index page', () => {
    it('should have App component', () => {
        const subject = mount(<HomePage/>);

        expect(subject.find('App')).toHaveLength(0);
    });
});