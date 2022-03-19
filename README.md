# AWS-Todos
這是一個簡單的架構於AWS上的 Node.js web 應用。為了學習並熟悉 AWS 的各項服務，我決定用一個簡單的常見 todo list 專案來作為串連起各項 AWS 常見主要服務的總練習。雖然看起來只是一個簡單的網站，卻是運用了 AWS 各項資源所搭建起的一個典型雲端web應用。

![AWS Todos pic](https://github.com/andy2148deathedge/AWS-Todos/blob/main/github_public/AWS%20Todos%20pic.png)
![AWS Todos error](https://github.com/andy2148deathedge/AWS-Todos/blob/main/github_public/AWS%20Todos%20error.png)

## 網站連結:
[AWS Todos Link](http://54.244.68.189/)

## 主要使用技術:
- **app:** [**Nodejs.16**](https://nodejs.org/en/) / [****express****](https://www.npmjs.com/package/express)
- **DB**/**ORM:  MySQL/ [Sequelize](https://www.npmjs.com/package/sequelize)**
- 涵蓋**AWS雲端服務: IAM VPC EC2 RDS S3**
    - 硬體/系統:  **AWS EC2 t2.micro** / **Amazon Linux 2 AMI**
    - 涵蓋其他AWS服務或概念: **SG AMI 等**
- **其他工具: Docker (Hub) / git (Hub)**

## 架構圖:

這邊是網站架構圖:

![5. 完整架構圖.png](https://github.com/andy2148deathedge/AWS-Todos/blob/main/github_public/AWS%20Todos%20%E6%9E%B6%E6%A7%8B.png)

- **VPC (Virtual Private Cloud)** 內含有公有網路(**Public subnet**)，跟私有網路(**Private subnet**)，私有網絡只能跟 VPC 內的網絡進行流通，公有網絡則是可以透過 **IGW** (Internet gateway)讓來自網際網路的使用者進行訪問。
- 搭建在公有網絡上的虛擬機器實例 **EC2** 裡面部屬著 **Node.js web 應用**，並且透過 VPC 內的 **RTB (route table)** 可以訪問到私有網路內的 **RDS** 資料庫
- 搭建在私有網路內的是 AWS **RDS** 服務託管的 **MySQL 資料庫**，透過 RTB 跟 **SG(security group)** 只開放給公有網路以及限定管理者進行連線
- 透過 **S3** 服務儲存靜態資源，讓公有網路上的 node web 服務可以透過網際網路加載到 **AWS S3** 裡的靜態資源內容

## 專案各項AWS服務搭建實作步驟:

搭建過程會一一撰寫在下面文章。可以開啟新分頁觀看:

(需準備的 Node.js 程式撰寫過程不特別列出)

1. [**IAM權限管理 設置IAM管理員**](https://grateful-trunk-685.notion.site/IAM-IAM-75aec932da42498c83ec05312f8e5531)
2. [**搭建 VPC 及 Subnet**](https://grateful-trunk-685.notion.site/VPC-Subnet-1e4dc3a443fc4b04b3051d22425e929c)
3. [**IGW 和 route table 設置**](https://grateful-trunk-685.notion.site/IGW-route-table-65c901b5027d4f8482359ea6bc44a640)
4. [**設置SG - security group**](https://grateful-trunk-685.notion.site/SG-security-group-16db4125c4b84f74aa15ddb2ddf9e1d9)
5. [**EC2 - 建立雲端 web 服務器實例**](https://grateful-trunk-685.notion.site/EC2-web-3b87cb08ab0b4413a6dbeead2d400903)
6. [**系統設置與AMI等**](https://grateful-trunk-685.notion.site/AMI-feee45f571c04007b3003f971ecc5e94)
7. [**透過 AWS RDS 建置及託管 Mysql 資料庫實例**](https://grateful-trunk-685.notion.site/AWS-RDS-Mysql-34a4cb0d23c345a29ed474040d8f773a)
8. [**透過 EC2 實例，由本機 MySQL workbench 連結到私有網路中的RDS實例**](https://grateful-trunk-685.notion.site/0bae01d0a0c14757b8c6aac800e28868)
9. [透過AWS S3 **存放靜態資源**](https://grateful-trunk-685.notion.site/AWS-S3-cccf98c7426843dcbebf8a0bff70a48d)
10. [**最後階段Docker部署應用**](https://grateful-trunk-685.notion.site/AWS-Todos-IAM-VPC-EC2-RDS-S3-AWS-todo-list-05a49b23d2814ba696927f570cc533b9)

### 更多詳細說明請參考:
[**Notion 個人頁面 AWS Todos 專案介紹**](https://grateful-trunk-685.notion.site/AWS-Todos-IAM-VPC-EC2-RDS-S3-AWS-todo-list-05a49b23d2814ba696927f570cc533b9)