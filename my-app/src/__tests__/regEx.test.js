import {
    companyCodeRegExValidation,
    strongPasswordRegEx,
    emailRegExValidation
} from '../components/utilities/regEx';

it('properly checks password strenght', () => {
    expect('passwordadsadwasd').not.toMatch(strongPasswordRegEx);
    expect('').not.toMatch(strongPasswordRegEx);
    expect('123123123231').not.toMatch(strongPasswordRegEx);
    expect('WwWWWWWWWWWWWWWWWW').not.toMatch(strongPasswordRegEx);
    expect('wWwWwWwwwWWwWw').not.toMatch(strongPasswordRegEx);
    expect('&&&&&&&&&3244').not.toMatch(strongPasswordRegEx);

    expect('Pass123$$').toMatch(strongPasswordRegEx);
    expect('HoNNey332@').toMatch(strongPasswordRegEx);
});

it('properly checks code', () => {
    expect('').not.toMatch(companyCodeRegExValidation);
    expect('qwerqwerqwerqwer').not.toMatch(companyCodeRegExValidation);
    expect('123123123123123f').not.toMatch(companyCodeRegExValidation);
    expect('123We12wewa231sd').not.toMatch(companyCodeRegExValidation);
    expect('112312321345646').not.toMatch(companyCodeRegExValidation);

    expect('1234123412341234').toMatch(companyCodeRegExValidation);
    expect('2344234627920539').toMatch(companyCodeRegExValidation);
});

it('properly checks emails', () => {
    expect('helloeqwes').not.toMatch(emailRegExValidation);
    expect('rwe2rww.weasd').not.toMatch(emailRegExValidation);
    expect('waeawe@weasdwawd').not.toMatch(emailRegExValidation);
    expect('wa2edfrseawe@.wea3213').not.toMatch(emailRegExValidation);
    expect('wa2edfrs.eawe.wea3213').not.toMatch(emailRegExValidation);

    expect('Proper@aw.sad').toMatch(emailRegExValidation);
    expect('wfasfdsa@dwasdzx.pdasd').toMatch(emailRegExValidation);
});
