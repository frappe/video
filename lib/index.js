import { t } from 'testcafe';
import speak from './speak';
import desk from './desk';
import form from './form';
import modal from './modal';
import utils from './utils';

export default Object.assign(t, speak, desk, form, modal, utils);
