import React from 'react';
import { useTranslation } from 'react-i18next';
import logoKroni from '../assets/logo-kroni-morado.png';

const Onboarding: React.FC = () => {
  const { t, i18n } = useTranslation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí irá la lógica para manejar el envío del formulario
    console.log('Formulario enviado');
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8">
          {/* Language Toggle Button */}
          <div className="flex justify-end mb-4">
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {i18n.language === 'es' ? 'English' : 'Español'}
            </button>
          </div>

          {/* Logo de Kroni */}
          <div className="flex justify-center mb-8">
            <img
              src={logoKroni}
              alt="Logo Kroni"
              className="h-16 w-auto"
            />
          </div>

          <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
            {t('onboarding.title')}
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Sección: Datos del administrador de cuenta */}
            <fieldset className="space-y-4">
              <legend className="text-xl font-semibold text-gray-900 mb-4">
                {t('onboarding.adminData.title')}
              </legend>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="admin_nombre" className="block text-sm font-medium text-gray-700">
                    {t('onboarding.adminData.name')}
                  </label>
                  <input
                    type="text"
                    id="admin_nombre"
                    name="admin_nombre"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="admin_apellido" className="block text-sm font-medium text-gray-700">
                    {t('onboarding.adminData.lastName')}
                  </label>
                  <input
                    type="text"
                    id="admin_apellido"
                    name="admin_apellido"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="admin_email" className="block text-sm font-medium text-gray-700">
                    {t('onboarding.adminData.email')}
                  </label>
                  <input
                    type="email"
                    id="admin_email"
                    name="admin_email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="admin_telefono" className="block text-sm font-medium text-gray-700">
                    {t('onboarding.adminData.phone')}
                  </label>
                  <input
                    type="tel"
                    id="admin_telefono"
                    name="admin_telefono"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </fieldset>

            {/* Sección: Datos de la empresa */}
            <fieldset className="space-y-4">
              <legend className="text-xl font-semibold text-gray-900 mb-4">
                {t('onboarding.companyData.title')}
              </legend>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label htmlFor="empresa_nombre" className="block text-sm font-medium text-gray-700">
                    {t('onboarding.companyData.name')}
                  </label>
                  <input
                    type="text"
                    id="empresa_nombre"
                    name="empresa_nombre"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="empresa_direccion" className="block text-sm font-medium text-gray-700">
                    {t('onboarding.companyData.address')}
                  </label>
                  <input
                    type="text"
                    id="empresa_direccion"
                    name="empresa_direccion"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="empresa_ciudad" className="block text-sm font-medium text-gray-700">
                    {t('onboarding.companyData.city')}
                  </label>
                  <input
                    type="text"
                    id="empresa_ciudad"
                    name="empresa_ciudad"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="empresa_estado" className="block text-sm font-medium text-gray-700">
                    {t('onboarding.companyData.state')}
                  </label>
                  <input
                    type="text"
                    id="empresa_estado"
                    name="empresa_estado"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="empresa_pais" className="block text-sm font-medium text-gray-700">
                    {t('onboarding.companyData.country')}
                  </label>
                  <select
                    id="empresa_pais"
                    name="empresa_pais"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="" disabled selected>{t('onboarding.companyData.selectCountry')}</option>
                    <option>México</option>
                    <option>Estados Unidos</option>
                    <option>Colombia</option>
                    <option>España</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="empresa_cp" className="block text-sm font-medium text-gray-700">
                    {t('onboarding.companyData.postalCode')}
                  </label>
                  <input
                    type="text"
                    id="empresa_cp"
                    name="empresa_cp"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </fieldset>

            {/* Sección: Preguntas iniciales */}
            <fieldset className="space-y-4">
              <legend className="text-xl font-semibold text-gray-900 mb-4">
                {t('onboarding.initialQuestions.title')}
              </legend>
              
              <p className="text-sm text-gray-600">
                {t('onboarding.initialQuestions.description')}
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('onboarding.initialQuestions.hasStore')} *
                  </label>
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="tiene_tienda"
                        value="Sí"
                        required
                        className="form-radio text-blue-600"
                      />
                      <span className="ml-2">{t('onboarding.initialQuestions.yes')}</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="tiene_tienda"
                        value="No"
                        className="form-radio text-blue-600"
                      />
                      <span className="ml-2">{t('onboarding.initialQuestions.no')}</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="plataforma_ecommerce" className="block text-sm font-medium text-gray-700">
                    {t('onboarding.initialQuestions.platform')}
                  </label>
                  <input
                    type="text"
                    id="plataforma_ecommerce"
                    name="plataforma_ecommerce"
                    placeholder="Shopify, WooCommerce, Mercado Libre…"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="url_tienda" className="block text-sm font-medium text-gray-700">
                    {t('onboarding.initialQuestions.storeUrl')}
                  </label>
                  <input
                    type="url"
                    id="url_tienda"
                    name="url_tienda"
                    placeholder="https://tusitio.com"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="volumen_pedidos" className="block text-sm font-medium text-gray-700">
                    {t('onboarding.initialQuestions.orderVolume')}
                  </label>
                  <select
                    id="volumen_pedidos"
                    name="volumen_pedidos"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="" disabled selected>{t('onboarding.initialQuestions.selectVolume')}</option>
                    <option value="300-500">300 - 500 pedidos</option>
                    <option value="500-800">500 - 800 pedidos</option>
                    <option value="800-1200">800 - 1200 pedidos</option>
                    <option value="1200-1500">1200 - 1500 pedidos</option>
                    <option value="1500-2500">1,500 - 2,500 pedidos</option>
                    <option value="2500-5000">2,500 - 5,000 pedidos</option>
                    <option value="5000+">5,000+ pedidos</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('onboarding.initialQuestions.hasCsat')} *
                  </label>
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="tiene_csat"
                        value="Sí"
                        required
                        className="form-radio text-blue-600"
                      />
                      <span className="ml-2">{t('onboarding.initialQuestions.yes')}</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="tiene_csat"
                        value="No"
                        className="form-radio text-blue-600"
                      />
                      <span className="ml-2">{t('onboarding.initialQuestions.no')}</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="sistema_csat" className="block text-sm font-medium text-gray-700">
                    {t('onboarding.initialQuestions.whichCsat')}
                  </label>
                  <input
                    type="text"
                    id="sistema_csat"
                    name="sistema_csat"
                    placeholder="Zendesk, WhatsApp Business…"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </fieldset>

            {/* Sección: Accesos y credenciales */}
            <fieldset className="space-y-4">
              <legend className="text-xl font-semibold text-gray-900 mb-4">
                {t('onboarding.credentials.title')}
              </legend>
              
              <p className="text-sm text-gray-600">
                {t('onboarding.credentials.description')}
              </p>

              <div className="space-y-4">
                <div>
                  <label htmlFor="api_url" className="block text-sm font-medium text-gray-700">
                    {t('onboarding.credentials.apiUrl')}
                  </label>
                  <input
                    type="url"
                    id="api_url"
                    name="api_url"
                    placeholder="https://api.tusitio.com"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="api_usuario" className="block text-sm font-medium text-gray-700">
                    {t('onboarding.credentials.apiUser')}
                  </label>
                  <input
                    type="text"
                    id="api_usuario"
                    name="api_usuario"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="api_secreto" className="block text-sm font-medium text-gray-700">
                    {t('onboarding.credentials.apiSecret')}
                  </label>
                  <input
                    type="password"
                    id="api_secreto"
                    name="api_secreto"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </fieldset>

            {/* Sección: Usuarios adicionales */}
            <fieldset className="space-y-4">
              <legend className="text-xl font-semibold text-gray-900 mb-4">
                {t('onboarding.additionalUsers.title')}
              </legend>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="user1_nombre" className="block text-sm font-medium text-gray-700">
                      {t('onboarding.additionalUsers.user1.name')}
                    </label>
                    <input
                      type="text"
                      id="user1_nombre"
                      name="user1_nombre"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="user1_email" className="block text-sm font-medium text-gray-700">
                      {t('onboarding.additionalUsers.user1.email')}
                    </label>
                    <input
                      type="email"
                      id="user1_email"
                      name="user1_email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="user1_tipo" className="block text-sm font-medium text-gray-700">
                      {t('onboarding.additionalUsers.user1.permission')}
                    </label>
                    <select
                      id="user1_tipo"
                      name="user1_tipo"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="administrador">{t('onboarding.additionalUsers.permissions.admin')}</option>
                      <option value="restringido">{t('onboarding.additionalUsers.permissions.restricted')}</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="user2_nombre" className="block text-sm font-medium text-gray-700">
                      {t('onboarding.additionalUsers.user2.name')}
                    </label>
                    <input
                      type="text"
                      id="user2_nombre"
                      name="user2_nombre"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="user2_email" className="block text-sm font-medium text-gray-700">
                      {t('onboarding.additionalUsers.user2.email')}
                    </label>
                    <input
                      type="email"
                      id="user2_email"
                      name="user2_email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="user2_tipo" className="block text-sm font-medium text-gray-700">
                      {t('onboarding.additionalUsers.user2.permission')}
                    </label>
                    <select
                      id="user2_tipo"
                      name="user2_tipo"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="administrador">{t('onboarding.additionalUsers.permissions.admin')}</option>
                      <option value="restringido">{t('onboarding.additionalUsers.permissions.restricted')}</option>
                    </select>
                  </div>
                </div>
              </div>
            </fieldset>

            {/* Sección: Documentación adicional */}
            <fieldset className="space-y-4">
              <legend className="text-xl font-semibold text-gray-900 mb-4">
                {t('onboarding.documents.title')}
              </legend>
              
              <div>
                <label htmlFor="docs_procesos" className="block text-sm font-medium text-gray-700">
                  {t('onboarding.documents.description')}
                </label>
                <input
                  type="file"
                  id="docs_procesos"
                  name="docs_procesos"
                  accept=".pdf,.doc,.docx"
                  className="mt-1 block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
                />
              </div>
            </fieldset>

            {/* Botón de envío */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {t('onboarding.submit')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Onboarding; 