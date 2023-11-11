export const environments = {
  baseUrl: 'http://localhost:8081/producto',
  baseUrlReporte: 'http://localhost:8081/api',

  /**
 * CONSTANTES API_COACHWEB que determinan la URL de los servicios REST expuestos en el BACKEND.
 */
// const URL_API_COACHWEB = 'http://localhost:8081/'; //DESARROLLO - PRUEBAS - LOCAL Desde IDE
//export const URL_API_COACHWEB = 'http://siscem.ddns.net/portalproveedoresweb/'; //PRODUCCION - Desde Apache Tomcat con .War
//export const URL_API_COACHWEB = 'http://siscem.ddns.net/portalproveedoreswebprueba/'; //PRODUCCION - Desde Apache Tomcat con .War
//export const URL_API_COACHWEB = 'http://localhost:8080/portalproveedoresweb/'; //DESARROLLO - PRUEBAS - LOCAL Desde Apache Tomcat con .War
//export const URL_API_COACHWEB = 'http://localhost:8081/coachweb-1.0/'; //DESARROLLO - PRUEBAS - LOCAL Desde Apache Tomcat con .War


/**
 * CONSTANTE que determina la ruta de consulta de documentos de facturación electronica enviados a la DIAN.
 * Ambiente Habilitación: https://catalogo-vpfe-hab.dian.gov.co/document/searchqr?documentkey=CUFE
 * Ambiente Producción: https://catalogo-vpfe.dian.gov.co/document/searchqr?documentkey=CUFE
 */
//export const URL_DIAN = "https://catalogo-vpfe-hab.dian.gov.co/document/searchqr?documentkey="; //Habilitación
//export const URL_DIAN = "https://catalogo-vpfe.dian.gov.co/document/searchqr?documentkey="; //PRODUCCION

/**
 * Constantes APIDIAN
 */
//export const URL_BASE_APIDIAN = 'http://apidian.ooo:8000/'; //DESARROLLO - PRUEBAS
//export const URL_BASE_APIDIAN = 'http://apidian.co:8000/'; //DESARROLLO - PRUEBAS-doyer
//export const URL_BASE_APIDIAN = 'http://localhost:8000/apidian/public/'; //DESARROLLO - PRUEBAS
//export const URL_BASE_APIDIAN = 'http://siscem.ddns.net:8081/apidian/public/'; //PRODUCCION
/**
 * URL PATH de la APIDIAN para consumir los diferentes servicios que expone.
 */
//export const URL_APIDIAN = URL_BASE_APIDIAN + "api/ubl2.1/";
/**
 * URL que determina la ruta base donde se encuentran los archivos PDF y XML
 * de las facturas y notas enviadas a la DIAN, documentos generados por la Apidian.
 */
//export const URL_APIDIAN_PUBLIC = URL_BASE_APIDIAN + "storage/";
//export const URL_APIDIAN_PUBLIC = "http://siscem.ddns.net:8081/apidian/storage/app/public/";
//export const URL_APIDIAN_PUBLIC = "http://localhost:8000/apidian/storage/app/public/";
/**
 * Constantes para construir URL que se encarga de consultar documentos por
 * numero ZIP o CUFE.
 */
//export const GET_STATUS_ZIP = "status/zip/";
//export const GET_STATUS_CUFE = "status/document/";

/**
 * Constantes para construir URL donde se envian los diferentes docs de
 * Facturacion Electronica CoachWeb a la ApiDIAN.
 */
//export const DOC_FACTURA = "invoice";
//export const DOC_NOTA_DEBITO = "debit-note";
//export const DOC_NOTA_CREDITO = "credit-note";

/**
 * Constantes para construir URL donde se envian las diferentes facturas de
 * Facturacion Electronica CoachWeb a la ApiDIAN para enviarselas a los clientes.
 */
//export const ORG_DOCS_CLIENTE = URL_BASE_APIDIAN + "api/add-customers-documentos-xml/";
//export const ENV_FACTURA_CLIENTE = URL_BASE_APIDIAN + "api/send-email-customer";

/**
 * Constantes para construir URL donde se va registrar la informacion de la
 * empresa, el software, resoluciones, certificado electronico con lo que se va
 * facturar electronicamente ante la DIAN
 */
//export const CONFIG_EMPRESA = "config/";
//export const CONFIG_LOGO_EMPRESA = "config/logo";
//export const CONFIG_SOFTWARE = "config/software";
//export const CONFIG_CERTIFICADO = "config/certificate";
//export const CONFIG_RESOLUCION = "config/resolution";

}


