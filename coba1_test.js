
Feature('login');

Scenario('test something', (I) => {
	//I.waitForElement('#com.cartenz.oss:id/emailField');
	I.wait(3);
	I.fillField('#com.cartenz.taxpayerpalu:id/et_email','test2@mailnesia.com');
	I.fillField('#com.cartenz.taxpayerpalu:id/et_password','qwe123')
	I.click('#com.cartenz.taxpayerpalu:id/btn_login');
	I.wait(5);
	I.click('//android.widget.FrameLayout[@index=1]');
	I.wait(3);
});