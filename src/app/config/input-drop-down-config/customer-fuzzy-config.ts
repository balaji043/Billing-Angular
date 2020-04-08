import { InputDropDownConfig } from 'src/app/model/input-dropdown.model';
import { MSName, CustomerAPIName } from 'src/app/utils/billing-constants';

export function CustomerFuzzyConfig(): InputDropDownConfig {
    return new InputDropDownConfig(
        'Search',
        'name',
        MSName.CUSTOMER_MS,
        CustomerAPIName.FUZZY
    );
}
