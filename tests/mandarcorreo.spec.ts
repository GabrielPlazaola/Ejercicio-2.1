import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ejercicio-2-1-ingsoft2.vercel.app/');
  await page.getByPlaceholder('Correo o nombre de usuario').click();
  await page.getByPlaceholder('Correo o nombre de usuario').fill('gabriel');
  await page.getByPlaceholder('Correo o nombre de usuario').press('Tab');
  await page.getByPlaceholder('Contraseña').fill('123');
  await page.getByPlaceholder('Contraseña').press('Enter');
  await page.getByRole('button', { name: 'Salir' }).click();
  await page.locator('body').click();
  await page.getByRole('heading', { name: 'Iniciar sesión' }).click();
});
