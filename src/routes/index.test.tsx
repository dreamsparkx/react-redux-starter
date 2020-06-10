import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

test('test routes', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/']}>
            <div>asd</div>
        </MemoryRouter>
    );
});