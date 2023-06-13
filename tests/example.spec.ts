import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ejercicio-2-1-ingsoft2.vercel.app/');
  await page.getByPlaceholder('Correo o nombre de usuario').click();
  await page.getByPlaceholder('Correo o nombre de usuario').fill('gabriel');
  await page.getByPlaceholder('Correo o nombre de usuario').press('Tab');
  await page.getByPlaceholder('Contraseña').fill('123');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.getByRole('button', { name: 'Enviar correo' }).click();
  await page.getByPlaceholder('Para').click();
  await page.getByPlaceholder('Para').fill('tomi');
  await page.getByPlaceholder('Para').press('Tab');
  await page.getByPlaceholder('Asunto').fill('test');
  await page.getByPlaceholder('Asunto').press('Tab');
  await page.getByPlaceholder('Mensaje').fill('test');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Enviar', exact: true }).click();
  await page.getByRole('button', { name: 'bandeja de entrada' }).click();
  await page.getByRole('button', { name: 'bandeja de enviados' }).click();
  await page.getByText('tomi').click();
  await page.locator('#template_correoseleccionado').getByText('tomi').click();
  await page.getByText('test').nth(2).click();
  await page.getByText('test').nth(3).click();
});
