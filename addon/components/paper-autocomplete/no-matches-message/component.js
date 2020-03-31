import Component from '@ember/component';

import template from './template';

import { tagName, layout } from '@ember-decorators/component';

@tagName('')
@layout(template)
class PaperAutocompleteNoMatchesMessage extends Component {

}

export default PaperAutocompleteNoMatchesMessage;
