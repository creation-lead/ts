import test from 'ava';
import {shallow, mount} from 'enzyme';
import ContentBuilder, {t as tt} from '../src/ContentBuilder';

const props = {
    resolve: id => id,
    reject: err => err,
    translate: key => ({title:'lorem', description:'ipsum'})
};

const data = {
    lorem: 'ipsum'
};

test('ContentBuilder return false if neither props, data nor key provided', t => t.false(ContentBuilder()()));
test('ContentBuilder return false if neither props nor key provided', t => t.false(ContentBuilder()(data)));
test('ContentBuilder return false if neither data nor key provided', t => t.false(ContentBuilder()(data, 0)));
test('ContentBuilder return false if no data provided', t => t.false(ContentBuilder(props)(undefined, 0)));
test('ContentBuilder return false if no key provided', t => t.false(ContentBuilder(props)(data)));
// test('ContentBuilder return a "Content" React Element if props, data and key provided', t => {
//     const reactElement = shallow(ContentBuilder(props)(data, 0));
//     Object.keys(props).forEach(key => t.is(reactElement.instance().props[key], props[key]));
//     t.is(reactElement.instance().props.lorem, data.lorem);
// });