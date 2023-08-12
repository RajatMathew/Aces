import Head from 'next/head';
import Layout from '../../components/Layout'
import Spacing from '../../components/Spacing';
import React, { useState } from 'react';
import { FileImageOutlined } from '@ant-design/icons';
import { message, Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';
import { Button } from 'antd';

const { Dragger } = Upload;
const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

const LightRegistration = ({ data }) => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([
    ])
    const handleCancel = () => setPreviewOpen(false);
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };
    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );
    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };
    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };
    return (
        <>
            <Head>
                <title>Aces | IndividualArtist/Jamroom</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/images/logo.svg" />
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
            </Head>
            <Layout>
                <Spacing lg="150" md="80" />
                <section className="antialiased gray text-gray-200 min-h-screen p-4 flex items-center">
                    <div className="w-full">
                        <div>
                            <div className="relative px-4 sm:px-6 lg:px-2  mx-auto text-white">
                                <Dragger {...props}>
                                    <p className="ant-upload-drag-icon">
                                        <FileImageOutlined />
                                    </p>
                                    <p className="ant-upload-text text-white">Cover photo</p>

                                </Dragger>
                            </div>
                            <div className="relative px-4 sm:px-6 lg:px-8 pb-8 mx-auto" x-data="{ card: true }">
                                <div className="bg-gray-800 px-8 pb-6 rounded-b shadow-lg">
                                    <div className="text-center mb-6">
                                        <div className="mb-2 pt-2">
                                            <Upload
                                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                                listType="picture-circle"
                                                fileList={fileList}
                                                onPreview={handlePreview}
                                                onChange={handleChange}
                                            >
                                                {fileList.length >= 8 ? null : uploadButton}
                                            </Upload>
                                            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                                                <img
                                                    alt="example"
                                                    style={{
                                                        width: '100%',
                                                    }}
                                                    src={previewImage}
                                                />
                                            </Modal>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-xl font-medium leading-6 text-gray-200">IndividualArtist/Jamroom Registration</h3>
                                        <p className="mt-4 text-sm leading-5 text-gray-500">
                                            Please fill in the form to register your IndividualArtist/Jamroom.
                                        </p>
                                    </div>
                                    <form className="mt-6" action="#" method="POST">
                                        <div className="flex flex-wrap ">
                                            <div className="w-full my-2">
                                                <label className="block text-sm font-medium leading-5 text-gray-400">
                                                    IndividualArtist/Jamroom Name
                                                </label>
                                                <div className="mt-1 rounded-md shadow-sm">
                                                    <input
                                                        id="IndividualArtist/Jamroom_name"
                                                        type="text"
                                                        required
                                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm bg-gray-800 text-gray-200"
                                                        placeholder="IndividualArtist/Jamroom Name"
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full my-2">
                                                <label className="block text-sm font-medium leading-5 text-gray-400">
                                                    Bio
                                                </label>
                                                <div className="mt-1 rounded-md shadow-sm">
                                                    <input
                                                        id="IndividualArtist/Jamroom_name"
                                                        type="text"
                                                        required
                                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm bg-gray-800 text-gray-200"
                                                        placeholder="IndividualArtist/Jamroom Name"
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full my-2">
                                                <label className="block text-sm font-medium leading-5 text-gray-400">
                                                    Contact Number 1
                                                </label>
                                                <div className="mt-1 rounded-md shadow-sm">
                                                    <input
                                                        id="IndividualArtist/Jamroom_name"
                                                        type="text"
                                                        required
                                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm bg-gray-800 text-gray-200"
                                                        placeholder="Contact Number 1"
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full my-2">
                                                <label className="block text-sm font-medium leading-5 text-gray-400">
                                                    Contact Number 2
                                                </label>
                                                <div className="mt-1 rounded-md shadow-sm">
                                                    <input
                                                        id="IndividualArtist/Jamroom_name"
                                                        type="text"
                                                        required
                                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm bg-gray-800 text-gray-200"
                                                        placeholder="Contact Number 2"
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full my-2">
                                                <label className="block text-sm font-medium leading-5 text-gray-400">
                                                    Brand Email Id
                                                </label>
                                                <div className="mt-1 rounded-md shadow-sm">
                                                    <input
                                                        id="IndividualArtist/Jamroom_name"
                                                        type="text"
                                                        required
                                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm bg-gray-800 text-gray-200"
                                                        placeholder="Brand Email Id"
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full my-2">
                                                <label className="block text-sm font-medium leading-5 text-gray-400">
                                                    Area Of Services
                                                </label>
                                                <div className="mt-1 rounded-md shadow-sm">
                                                    <input
                                                        id="IndividualArtist/Jamroom_name"
                                                        type="text"
                                                        required
                                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm bg-gray-800 text-gray-200"
                                                        placeholder="Area Of Services"
                                                    />
                                                </div>
                                            </div>

                                            <div className="w-full my-2">
                                                <label className="block text-sm font-medium leading-5 text-gray-400">
                                                    Highlighted Show 1
                                                </label>
                                                <div className="mt-1 rounded-md shadow-sm">
                                                    <input
                                                        id="IndividualArtist/Jamroom_name"
                                                        type="text"
                                                        required
                                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm bg-gray-800 text-gray-200"
                                                        placeholder="Highlighted Show 1"
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full my-2">
                                                <label className="block text-sm font-medium leading-5 text-gray-400">
                                                    Highlighted Show 2
                                                </label>
                                                <div className="mt-1 rounded-md shadow-sm">
                                                    <input
                                                        id="IndividualArtist/Jamroom_name"
                                                        type="text"
                                                        required
                                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm bg-gray-800 text-gray-200"
                                                        placeholder="Highlighted Show 2"
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full my-2">
                                                <label className="block text-sm font-medium leading-5 text-gray-400">
                                                    Video Links
                                                </label>
                                                <div className="mt-1 rounded-md shadow-sm">
                                                    <input
                                                        id="IndividualArtist/Jamroom_name"
                                                        type="text"
                                                        required
                                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm bg-gray-800 text-gray-200"
                                                        placeholder="Video links"
                                                    />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="flex flex-wrap justify-content-between">
                                            <div>
                                                <ImgCrop rotationSlider>
                                                    <Upload
                                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                                        listType="picture-card"
                                                        fileList={fileList}
                                                        onChange={onChange}
                                                        onPreview={onPreview}
                                                    >
                                                        {fileList.length < 5 && '+ Upload'}
                                                    </Upload>
                                                </ImgCrop>
                                            </div>
                                            <div>
                                                <ImgCrop rotationSlider>
                                                    <Upload
                                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                                        listType="picture-card"
                                                        fileList={fileList}
                                                        onChange={onChange}
                                                        onPreview={onPreview}
                                                    >
                                                        {fileList.length < 5 && '+ Upload'}
                                                    </Upload>
                                                </ImgCrop>
                                            </div>
                                            <div>
                                                <ImgCrop rotationSlider>
                                                    <Upload
                                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                                        listType="picture-card"
                                                        fileList={fileList}
                                                        onChange={onChange}
                                                        onPreview={onPreview}
                                                    >
                                                        {fileList.length < 5 && '+ Upload'}
                                                    </Upload>
                                                </ImgCrop>
                                            </div><div>
                                                <ImgCrop rotationSlider>
                                                    <Upload
                                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                                        listType="picture-card"
                                                        fileList={fileList}
                                                        onChange={onChange}
                                                        onPreview={onPreview}
                                                    >
                                                        {fileList.length < 5 && '+ Upload'}
                                                    </Upload>
                                                </ImgCrop>
                                            </div>
                                        </div>
                                        <Button type="primary">Submit</Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout >
        </>

    );
};

export default LightRegistration;
