const SECTIONS = {
    introduction: 1,
    company: 2,
    confirmation: 3
};

export function getNextSection(activeSection) {
    const { [activeSection]: activeSectionNumber } = SECTIONS;
    const nextActiveSectionNumber = activeSectionNumber + 1;

    for (const section in SECTIONS) {
        const { [section]: sectionNumber } = SECTIONS;
        if (sectionNumber === nextActiveSectionNumber) {
            return section;
        }
    }
    return '';
}

export function getSectionsArray() {
    return Object.keys(SECTIONS).sort((a, b) => {
        return SECTIONS[a] - SECTIONS[b];
    });
}

export function getFirstSection() {
    return getSectionsArray()[0];
}
