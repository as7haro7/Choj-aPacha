import React from 'react';

function Datos() {
  return (
    <>
      <link
        // href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        href="https://cdn.jsdelivr.net/npm/tailwindcss@latest/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <helmet>
        <title>Chojña Pacha | Datos</title>
      </helmet>

      <div className="bg-gradient-to-r from-violet-200 to-pink-200 h-screen">
        <div className="flex items-center justify-center h-screen flex-col">
          <div>
            <h1 className="text-5xl font-semibold text-gray-600">COMPOSTERA</h1>
          </div>
          <div className=" py-24 sm:py-32">
            <div className="mx-auto  px-6 lg:px-8">
              <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
                <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-3xl leading-7 text-gray-600">Temperatura</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    {/* <i className="fas fa-thermometer-half" style="color: #059e8a"></i> */}
                    <span>
                      <span id="temp">.</span> &deg;C
                    </span>
                  </dd>
                </div>
                <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-3xl leading-7 text-gray-600">Humedad</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    {/* <i className="fas fa-tint" style="color: #00add6"></i> */}
                    <span>
                      <span id="hum">.</span> %
                    </span>
                  </dd>
                </div>
                <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-3xl leading-7 text-gray-600">Fecha y Hora</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl flex">
                    {/* <i className="fas fa-clock" aria-hidden="true"  style="color: #9abbabbe"></i> */}

                    <span className="text-2xl break-words" id="fh">
                      .
                    </span>
                  </dd>
                </div>
                <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-3xl leading-7 text-gray-600">Estado</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    {/* <i className="fa fa-check" aria-hidden="true"  style="color: #2dce7dbe"></i> */}
                    Activo
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Datos;
