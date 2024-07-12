const REPLACEMENT_IP_KEY = '<p class="p1">*THE_KEY_TO_REPLACE_THE_IP_ADDRESS*</p>';
const REPLACEMENT_IP_KEY_SECOND = '<p>*THE_KEY_TO_REPLACE_THE_IP_ADDRESS*</p>';

const wrapToDashboardLink = (replaceValue: string, articleId: number) => {
    return `<a href=https://dashboard.jjo.finance/instructions/${articleId} target=_blank>${replaceValue}</a>`;
};

export const replaceInstructionBody = (body: string, replaceValue: string, articleId: number) => {
    const key = body.includes(REPLACEMENT_IP_KEY) ? REPLACEMENT_IP_KEY : REPLACEMENT_IP_KEY_SECOND;
    return body.replace(key, wrapToDashboardLink(replaceValue, articleId));
};
