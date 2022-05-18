/**
 * @format
 */

import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native'
import Item from '../src/Components/Item';
import * as redux from 'react-redux'
import { FavsContainer, DetailContainer } from '../src/Containers';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});

const createTestProps = {
  navigation: {
    navigate: jest.fn()
  },
  route: {
    params: {
      id: "1234"
    }
  }
};

it('renders Item correctly', () => {
  const { getByText } = render(<Item title="Character" color="red" />);
  expect(getByText("Character")).toBeTruthy()
});

test('renders FavsContainer without favs elements', () => {
  jest
    .spyOn(redux, 'useSelector')
    .mockReturnValue([])
  const { getByText } = render(<FavsContainer />);
  expect(getByText("There isn't any fav character ...")).toBeTruthy()
});

test('renders DetailContainer correctly', () => {
  fetch = jest.fn(() => Promise.resolve());
  const { getByText, container } = render(<DetailContainer {...createTestProps} />);
  expect(getByText("Back")).toBeTruthy()
  expect(container.props.route.params.id).toBe("1234")
});
