import _ from "lodash";

/**
 * Current Page Data Helper
 * @param {number} activePage
 * @param {Array} data - all data
 * @param {number} pageSize - Max item couunt
 * @returns {Array} current page data
 */
export function paginationDataHelper({activePage, data, pageSize}) { 
    var offset = (activePage - 1) * pageSize,
    pagedItems = _.drop(data, offset).slice(0, pageSize);

    return pagedItems;
}