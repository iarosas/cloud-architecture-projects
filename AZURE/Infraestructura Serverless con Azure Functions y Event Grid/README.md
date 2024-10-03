# ⚡ Serverless Infrastructure with Azure Functions and Event Grid ⚡

## 📝 Descripción
Este proyecto despliega una solución serverless en Azure utilizando Azure Functions y Event Grid para manejar eventos en tiempo real.

### 🔧 Componentes:
- **Azure Functions**: Funciones sin servidor que procesan eventos.
- **Azure Event Grid**: Servicio de distribución de eventos que activa las funciones.
- **Azure Storage**: Almacena datos y blobs.
- **Application Insights**: Monitoreo y logging de la solución.

### 📂 Estructura de la Arquitectura:
1. Azure Event Grid recibe eventos de diferentes fuentes.
2. Los eventos activan Azure Functions para procesar la información.
3. Los datos procesados se almacenan en Azure Storage.
4. Application Insights recopila métricas para monitorización.

## 🚀 Despliegue
1. Clona este repositorio: `git clone <repo_url>`
2. Ejecuta `terraform init` para inicializar el entorno.
3. Ejecuta `terraform apply` para desplegar la arquitectura.

## 🛠️ Requisitos
- Cuenta de Azure.
- Azure CLI.
- Terraform.

