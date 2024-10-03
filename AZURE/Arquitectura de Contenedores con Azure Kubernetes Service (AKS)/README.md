# 🐳 Container Architecture with Azure Kubernetes Service (AKS) 🐳

## 📝 Descripción
Este proyecto implementa una solución de contenedores usando Azure Kubernetes Service (AKS), con escalabilidad automática y balanceo de carga.

### 🔧 Componentes:
- **Azure Kubernetes Service (AKS)**: Cluster Kubernetes gestionado.
- **Azure Container Registry (ACR)**: Almacén de imágenes de contenedores.
- **Azure Load Balancer**: Gestiona el tráfico hacia el cluster.
- **Azure Key Vault**: Gestión segura de secretos y credenciales.

### 📂 Estructura de la Arquitectura:
1. AKS despliega un cluster para gestionar contenedores.
2. Las imágenes se extraen de ACR.
3. El Load Balancer distribuye el tráfico entrante entre los nodos del cluster.
4. Key Vault gestiona los secretos utilizados en el cluster.

## 🚀 Despliegue
1. Clona este repositorio: `git clone <repo_url>`
2. Ejecuta `terraform init`.
3. Ejecuta `terraform apply` para desplegar el cluster AKS.

## 🛠️ Requisitos
- Cuenta de Azure.
- Azure CLI.
- Terraform.

