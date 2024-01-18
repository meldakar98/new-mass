import React from 'react';
const FileUpload: React.FC = () => {
  

  return (
    <div className="box">
      <div className="title table">
        <div className="table_cell tab_head_title">
          <i className="uil uil-game-structure"></i>
          <span className="text">PROJECT STRUCTURE</span>
        </div>
        <div className="table_cell tab_head_options">
          <a title="Add a folder in project">
            <i className="uil uil-folder-plus"></i>
          </a>
          <a title="Upload a file in project root">
            <i className="uil uil-file-upload"></i>
          </a>
          <div className="none">
            <input
              type="file"
              name="othersProjectFile1"
              id="othersProjectFile1"
              className="othersProjectFile none"
            />
          </div>
        </div>
      </div>
      <div className="inputSearch">
        <input type="url" id="searchUrlZip" placeholder="Enter URL to download project files" />
        <i className="uil uil-search-plus"></i>
      </div>
      <label htmlFor="projectFile">
        <div className="boxUpload">
          <input type="file" name="projectFile" id="projectFile" className="none" />
          <i className="uil uil-upload"></i>
          <p>
            {' '}
            <b>Drop a file or a zip-archive here</b>{' '}
          </p>
          <p> Alternatively, you can select a file by</p>
          <p> clicking here</p>
          <ul id="file-list"></ul>
        </div>
      </label>
      <div className="boxContainer none">
        <ul id="filehierarchy_tree" className="filehierarchy_tree"></ul>
      </div>
      <div className="boxInfos">
        <p className="allowed uil uil-check-circle none">Upload succeed</p>
        <p className="error uil uil-minus-circle none">Upload rejected</p>
      </div>
    </div>
  );
};

export default FileUpload;
